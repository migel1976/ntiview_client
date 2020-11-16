export function generateQuickGuid() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
}

export class Object_rop
{
    constructor(comm, ws, object_id) {
	this.comm = comm;
	this.ws = ws;
	this.object_id = object_id;
    }
};

export class Communicator
{
    constructor() {
	this.ws = null;
	this.messages = new Map();
	this.objects = new Map();
    }

    add_object(o, object_id) {
	if (!object_id) {
	    object_id = generateQuickGuid();
	}
	this.objects.set(object_id, o);
	let o_type = o.get_rop_type();
	return new o_type(this, this.ws, object_id);
    }
    
    add_message_handler(message_id, cbs) {
	this.messages.set(message_id, cbs)
    }
    
    get_rop(interface_type, ws_url, object_id) {	
	return new Promise((resolve, reject) => {
	    this.ws = new WebSocket(ws_url);
	    this.ws.onopen = (e) => {
		console.log("WS: connection established");
		let oo = new interface_type();
		let rop_type = oo.get_rop_type();
		let o_rop = new rop_type(this, this.ws, object_id);
		resolve(o_rop);
	    };

	    this.ws.onerror = function(error) {
		console.log(`WS error: ${error.message}`);
		reject(error);
	    };

	    this.ws.onclose = function(event) {
		if (event.wasClean) {
		    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
		} else {
		    // e.g. server process killed or network down
		    // event.code is usually 1006 in this case
		    console.log('[close] Connection died');
		}
	    };

	    // ixWebSocket::sendBinary causes event object to have e.data
	    // to be usable only via e.data.text() promise, so c++ code
	    // switched to use ixWebSocket::send
	    this.ws.onmessage = (e) => {
		let e_data = e.data;
		console.log(`WS message: ${e_data}`);
		let message = JSON.parse(e_data);
		if (message['message-type'] == 'method-call-return') {
		    let [resolve, reject] = this.messages.get(message['orig-message-id']);
		    let ret = message.retval.retval;
		    resolve(ret);
		} else if (message['message-type'] == 'method-call-exception') {
		    let [resolve, reject] = this.messages.get(message['orig-message-id']);
		    reject(message['remote-exception-text']);
		} else if (message['message-type'] == 'method-call') {
		    let o = this.objects.get((message['object-id']));
		    let method = message['method-signature'];
		    let args = message['args'];
		    let res = o.__call_method(method, args);
		    let res_message = {
			'message-type': 'method-call-return',
			'message-id': generateQuickGuid(),
			'orig-message-id': message['message-id'],
			'retval': {
			    'retval': res || null
			}
		    };
		    let send_res = this.ws.send(JSON.stringify(res_message));
		    //console.log("send_res:", send_res);
		} else if (message['message-type'] == 'method-oneway-call') {
		    let o = this.objects.get((message['object-id']));
		    let method = message['method-signature'];
		    let args = message['args'];
		    o.__call_method(method, args);		    
		}
	    };
	});
    }
};

export class dataclass {
  constructor() {
  }
};

function obj_rop_replacer(key, value)
{
    if (value instanceof Object_rop) {
	return {'__interface_type': value.get_type_name(),
		'object_id': value.object_id};
    }
    return value;
}

export function to_json_string(o) {
    return JSON.stringify(o, obj_rop_replacer);
}

export function from_json(o, o_tmpl) {
    if (o_tmpl instanceof dataclass) {
	for (let k of Object.keys(o)) {
	    if (o_tmpl[k] instanceof dataclass) {
		o_tmpl[k] = from_json(o[k], o_tmpl[k]);
	    } else {
		o_tmpl[k] = o[k];
	    }
	}
	return o_tmpl;
    }
    return o;
}
