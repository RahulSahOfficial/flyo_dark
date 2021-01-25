document.getElementById("email_submit").addEventListener("click",checkmail)
function checkmail()
{
	email=document.getElementById("email_id").value
	error_message=document.getElementById("wrong_email")
	if (!validateEmail(email))
		error_message.style.visibility="visible"
	else
		error_message.style.visibility="hidden"
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}