'use strict';
const collection = uniCloud.database().collection("user")
let ret_code = ""
exports.main = async (event, context) => {
	const {
		student_id,
		birthday,
		sex,
		avatar
	} = event
	const search_res = await collection.where({
		student_id:event.student_id
	}).get()
	console.log(search_res)
	const data_id = search_res.data[0]._id
	const set_res = await collection.doc(data_id).update({
		birthday:birthday,
		sex:sex,
		avatar:avatar
	}).then(res => {
		console.log("res")
		console.log(res)
		console.log(res.updated)
		if (res.updated <= 1)
		{
			ret_code = "注册成功"
		}
	}).catch(err => {
		console.log("err")
		console.log(err)
		ret_code = "注册失败"
	})
	return ret_code
};
