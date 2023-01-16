// 文档教程: https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction
// 扩展校验函数示例
module.exports = function(rule, value, data, callback) {
	console.log(rule)
	var pattern = new RegExp("[\\w]{6,20}")
	if (pattern.test(value))
	{
		if (value.length <= 20 && value.length >= 6)
		{
			return true
		}
		return false
	}
	return false
}