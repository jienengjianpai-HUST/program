'use strict';
const db=uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let {id}=event;
	let res = await db.collection("project").doc(event.id).get()
	let res1 = await db.collection("project").doc(event.id).update({
		sign_people:dbCmd.inc(1)
	})

	return res;
};
