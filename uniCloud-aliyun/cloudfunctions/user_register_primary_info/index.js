'use strict';
const db = uniCloud.database();
const collection = db.collection("user")
exports.main = async (event, context) => {
	const {
		nickname_,
		student_id_,
		password_,
	} = event
	// let search_col = collection.where({
	// 	student_id:
	// })
	let res = await collection.add({
		nickname: event.nickname_,
		student_id: event.student_id_,
		password: event.password_,
	}).catch(err => {
		console.log(err)
		if (err.search("学号共10位") != -1 || err.search("学号格式有误") != -1)
		{
			uni.showToast({
				title:"学号格式不正确",
				icon:'error'
			})
			return
		}
		else if (err.search('["password"]长度不能少于6') != -1 || err.search('["password"]长度不能超过20') != -1)
		{
			uni.showToast({
				title:"密码长度在6到20位之间",
				icon:'error'
			})
			return
		}
		var pattern = new RegExp("^Error: E11000 duplicate key error collection")
		if (pattern.test(err))
		{
			return "student id already exists"
		}
	})
	return res
};
