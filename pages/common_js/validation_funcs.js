function password_validation (password_in)
{
	var pattern = new RegExp("[\\w]{6,20}")
	if (!(pattern.test(password_in)))
	{
		console.log("geshi")
		return false
	}
	else if (!(password_in.length <= 20 && password_in.length >= 6))
	{
		console.log("changdu")
		return false
	}
	return true
}

function student_id_validation (student_id_in)
{
	var pattern = new RegExp("^U[0-9]{9}")
	if (!(pattern.test(student_id_in)))
	{
		return false
	}
	else if (!(student_id_in.length == 10))
	{
		return false
	}
	return true
}

export default
{
	password_validation,
	student_id_validation
}