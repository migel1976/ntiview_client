import * as axios from 'axios';

const instance=axios.create({
	baseURL:'http://localhost:5000/orders'
});

const OrdersApi={
	getItemsByAOID(aoid){
		return instance.get('?aoid='+aoid)
			.then((res)=>{
				return res.data;
			})
	},
	setItems(body){
		return instance.post('add',body)
			.then((res)=>{
				console.log('data was success added', res.data);
			})
	}
};
export default OrdersApi;
