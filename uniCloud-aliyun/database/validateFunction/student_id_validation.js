// 文档教程: https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction
// 扩展校验函数示例
module.exports = function(rule, value, data, callback) {
	console.log(rule)
	var pattern = new RegExp("^U[0-9]{9}")
	if (!(pattern.test(value)))
	{
		return false
	}
	return value.length == 10
}