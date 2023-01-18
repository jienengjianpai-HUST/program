'use strict';
const db=uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {detail}=event;
	let res=await db.collection("Project_Sign_List").add({
		posttime:Date.now(),
		...detail
	})
	return res;
};