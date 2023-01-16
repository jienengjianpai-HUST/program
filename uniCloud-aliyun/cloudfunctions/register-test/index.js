'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {nickname,student_id,password} = event;
	let res = await db.collection("user").add({
		nickname:nickname,
		student_id:student_id,
		password:password
	})
	return res;
};
