// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const collection = uniCloud.database().collection("user");
const db = uniCloud.database();
let ret_data = ""
module.exports = {
	_before: function () { // 通用预处理器

	},
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	async get_user_infos(stu_id_) {
		if (!stu_id_) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		const res = await collection.where({
			student_id: stu_id_
		}).get()
		.catch(err => {
			console.log("err!")
			console.log(err)
			return {
				errCode: '未知问题',
				errMsg: '请重试'
			}
		})
		console.log(res)
		ret_data = res.data[0]
		if (ret_data != undefined)
		{
			return {
				ret_data
			}
		}
		
	},
	async user_password_request(event){
		const {
			stu_id_input,
			pwd_input
		} = event
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
		}
	},
	async user_register_primary_info(event){
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
		res_data = res.id
		if (res_data != undefined)
		{
			return "注册成功"
		}
	},
	async user_register_secondary_info(event){
		const {
			student_id,
			birthday,
			sex,
			avatar
		} = event
		const search_res = await collection.where({
			student_id:event.student_id
		}).get()
		console.log(search_res)
		const data_id = search_res.data[0]._id
		const set_res = await collection.doc(data_id).update({
			birthday:birthday,
			sex:sex,
			avatar:avatar
		}).then(res => {
			console.log("res")
			console.log(res)
			console.log(res.updated)
			if (res.updated <= 1)
			{
				ret_data = "注册成功"
			}
		}).catch(err => {
			console.log("err")
			console.log(err)
			ret_data = "注册失败"
		})
		return ret_data
	}
}
