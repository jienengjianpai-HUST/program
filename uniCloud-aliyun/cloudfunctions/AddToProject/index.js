'use strict';
const db=uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let{detail} = event
	let res=await db.collection("project").add({
		posttime:Date.now(),
		...detail,
		sign_start:event.sign_start,
		sign_end:event.sign_end,
		pro_start:event.pro_start,
		pro_end:event.pro_end,
		
	})
	console.log(res);
	return res;
};
