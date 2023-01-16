'use strict';

const { error } = require("console");

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
	const res = await collection.add({
		nickname: event.nickname_,
		student_id: event.student_id_,
		password: event.password_,
	}).catch(err => {
		
	})
	console.log(res)
};
