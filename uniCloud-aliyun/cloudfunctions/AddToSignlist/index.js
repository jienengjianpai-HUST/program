'use strict';
const db=uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {detail}=event;
	let res=await db.collection("sign_List").add({
		posttime:Date.now(),
		...detail
	})
	return res;
	
	

};