'use strict';
const db = uniCloud.database();
const collection = db.collection("user")
let res_id = ""
exports.main = async (event, context) => {
	const {
		nickname_,
		student_id_,
		password_,
	} = event
	let search_col = collection.where({
		student_id: event.student_id_
	})
	const cnt = await search_col.count()
	if (cnt.total >= 1)
	{
		return "学号已经存在"
	}
	const res = await collection.add({
		nickname: event.nickname_,
		student_id: event.student_id_,
		password: event.password_,
	}).catch(err => {
		console.log(err)
	})
	res_id = res.id
	if (res_id != undefined)
	{
		return "注册成功"
	}
};
