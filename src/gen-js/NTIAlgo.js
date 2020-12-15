//
// generated code: source - ../pybx/NTIAlgo.pybx
import * as libpybx from 'libpybx-js';
import * as Utils from './Utils.js';

export class AlgoOrderAttributes extends libpybx.dataclass {
  constructor(strategyType, symbol, account, side, qty, limPrice, timeStart, timeEnd, discretion, maxSpreadBps) {
  super();
    this.strategyType = strategyType;
    this.symbol = symbol;
    this.account = account;
    this.side = side;
    this.qty = qty;
    this.limPrice = limPrice;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.discretion = discretion;
    this.maxSpreadBps = maxSpreadBps;
  }
};
export class Snapshot extends libpybx.dataclass {
  constructor(timestamp, position, algo_orders) {
  super();
    this.timestamp = timestamp;
    this.position = position === undefined ? new Utils.DataFrame() : position;
    this.algo_orders = algo_orders === undefined ? new Utils.DataFrame() : algo_orders;
  }
};
export class StrategyType extends libpybx.dataclass {
  constructor(strategyType, description) {
  super();
    this.strategyType = strategyType;
    this.description = description;
  }
};
export class Symbol extends libpybx.dataclass {
  constructor(symbol, name, sector) {
  super();
    this.symbol = symbol;
    this.name = name;
    this.sector = sector;
  }
};
export class Account extends libpybx.dataclass {
  constructor(account, description) {
  super();
    this.account = account;
    this.description = description;
  }
};
export class AlgoOrder_rop extends libpybx.Object_rop {
  get_type_name() { return 'NTIAlgo.AlgoOrder'; }
  constructor(comm, ws, object_id) {
     super(comm, ws, object_id);
  this.cancelAlgoOrder = this.cancelAlgoOrder.bind(this);
  }
   to_json() { return {'object_id': this.object_id}; }
   cancelAlgoOrder() {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'AlgoOrder__cancelAlgoOrder',
          'args': {
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("cancelAlgoOrder:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, null);
 return ret; });
 }
};
export class AlgoOrderManager_rop extends libpybx.Object_rop {
  get_type_name() { return 'NTIAlgo.AlgoOrderManager'; }
  constructor(comm, ws, object_id) {
     super(comm, ws, object_id);
  this.placeAlgoOrder = this.placeAlgoOrder.bind(this);
  }
   to_json() { return {'object_id': this.object_id}; }
   placeAlgoOrder(oa) {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'AlgoOrderManager__placeAlgoOrder',
          'args': {
                 oa: oa,
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("placeAlgoOrder:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, new AlgoOrder_rop());
 return ret; });
 }
};
export class ServerInfo_rop extends libpybx.Object_rop {
  get_type_name() { return 'NTIAlgo.ServerInfo'; }
  constructor(comm, ws, object_id) {
     super(comm, ws, object_id);
  this.getAccounts = this.getAccounts.bind(this);
  this.getStrategyTypes = this.getStrategyTypes.bind(this);
  this.getSymbols = this.getSymbols.bind(this);
  }
   to_json() { return {'object_id': this.object_id}; }
   getAccounts() {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'ServerInfo__getAccounts',
          'args': {
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("getAccounts:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, []);
 return ret; });
 }
   getStrategyTypes() {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'ServerInfo__getStrategyTypes',
          'args': {
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("getStrategyTypes:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, []);
 return ret; });
 }
   getSymbols() {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'ServerInfo__getSymbols',
          'args': {
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("getSymbols:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, []);
 return ret; });
 }
};
export class SnapshotManager_rop extends libpybx.Object_rop {
  get_type_name() { return 'NTIAlgo.SnapshotManager'; }
  constructor(comm, ws, object_id) {
     super(comm, ws, object_id);
  this.getSnapshot = this.getSnapshot.bind(this);
  this.registerObserver = this.registerObserver.bind(this);
  }
   to_json() { return {'object_id': this.object_id}; }
   getSnapshot() {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'SnapshotManager__getSnapshot',
          'args': {
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("getSnapshot:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, new Snapshot());
 return ret; });
 }
   registerObserver(observer) {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'SnapshotManager__registerObserver',
          'args': {
                 observer: observer,
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("registerObserver:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, null);
 return ret; });
 }
};
export class SnapshotObserver_rop extends libpybx.Object_rop {
  get_type_name() { return 'NTIAlgo.SnapshotObserver'; }
  constructor(comm, ws, object_id) {
     super(comm, ws, object_id);
  this.changedSnapshot = this.changedSnapshot.bind(this);
  }
   to_json() { return {'object_id': this.object_id}; }
   changedSnapshot(new_snapshot) {
    let p = new Promise((resolve, reject) => {
         let call_req = {
               'message-type': 'method-call',
               'message-id': libpybx.generateQuickGuid(),
               'object-id': this.object_id,
              'method-signature': 'SnapshotObserver__changedSnapshot',
          'args': {
                 new_snapshot: new_snapshot,
          }
       };
	    this.comm.add_message_handler(call_req['message-id'], [resolve, reject]);
      console.log("changedSnapshot:", libpybx.to_json_string(call_req));
      this.ws.send(libpybx.to_json_string(call_req));
   });
 return p.then(ret_json => {
 let ret = libpybx.from_json(ret_json, null);
 return ret; });
 }
};
export class AlgoOrder
{
  get_rop_type() { return AlgoOrder_rop; }
   __call_method(method, args) {
      method = method.split("__")[1];
   if (method == 'cancelAlgoOrder') {
    return this.cancelAlgoOrder();
  }
  throw new Error("unknown method " + method)
}
cancelAlgoOrder() {throw new Error("not implemented");}
};
export class AlgoOrderManager
{
  get_rop_type() { return AlgoOrderManager_rop; }
   __call_method(method, args) {
      method = method.split("__")[1];
   if (method == 'placeAlgoOrder') {
    let arg_0 = libpybx.from_json(args.oa, new AlgoOrderAttributes());
    return this.placeAlgoOrder(arg_0);
  }
  throw new Error("unknown method " + method)
}
placeAlgoOrder(oa) {throw new Error("not implemented");}
};
export class ServerInfo
{
  get_rop_type() { return ServerInfo_rop; }
   __call_method(method, args) {
      method = method.split("__")[1];
   if (method == 'getAccounts') {
    return this.getAccounts();
  }
   if (method == 'getStrategyTypes') {
    return this.getStrategyTypes();
  }
   if (method == 'getSymbols') {
    return this.getSymbols();
  }
  throw new Error("unknown method " + method)
}
getAccounts() {throw new Error("not implemented");}
getStrategyTypes() {throw new Error("not implemented");}
getSymbols() {throw new Error("not implemented");}
};
export class SnapshotManager
{
  get_rop_type() { return SnapshotManager_rop; }
   __call_method(method, args) {
      method = method.split("__")[1];
   if (method == 'getSnapshot') {
    return this.getSnapshot();
  }
   if (method == 'registerObserver') {
    let arg_0 = libpybx.from_json(args.observer, new SnapshotObserver_rop());
    return this.registerObserver(arg_0);
  }
  throw new Error("unknown method " + method)
}
getSnapshot() {throw new Error("not implemented");}
registerObserver(observer) {throw new Error("not implemented");}
};
export class SnapshotObserver
{
  get_rop_type() { return SnapshotObserver_rop; }
   __call_method(method, args) {
      method = method.split("__")[1];
   if (method == 'changedSnapshot') {
    let arg_0 = libpybx.from_json(args.new_snapshot, new Snapshot());
    return this.changedSnapshot(arg_0);
  }
  throw new Error("unknown method " + method)
}
changedSnapshot(new_snapshot) {throw new Error("not implemented");}
};
