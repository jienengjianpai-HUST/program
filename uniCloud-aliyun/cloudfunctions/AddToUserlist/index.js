'use strict';
const db=uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {detail}=event;
	let res=await db.collection("user_list").add({
		posttime:Date.now(),
		...detail
	})
	return res;
};
