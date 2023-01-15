'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const {
		stu_id_input,
		pwd_input
	} = event
	//返回数据给客户端
	const res = await db.collection("user").where({
		'student_id':stu_id_input
	})
	const cnt = await res.count()
	//return res.count()
	//console.log(cnt.total)
	if (cnt.total == 0)
	{
		console.log("No match")
		return "inexist student_id"
	}
	else if(res.count() > 1)
	{
		console.log("Bug!")
		return "database error"
	}
	else
	{
		let final_res = await db.collection("user")
		.where({
			'student_id':stu_id_input
		}).get()
		//console.log(final_res.data[0])
		if (final_res.data[0] == undefined)
		{
			return "incorrect password"
		}
		if (pwd_input == final_res.data[0].password)
		{
			return "OK"
		}
		else
		{
			return "incorrect password"
		}
		//console.log(final_res)
	}
};
