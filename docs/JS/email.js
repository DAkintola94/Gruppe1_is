function sendEmail(){
    var paramsValue = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

const serviceID = "service_1e4t18b";
const templateID = "template_bchugar";

emailjs.send(serviceID, templateID, paramsValue).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Din melding har blitt sendt, tusen takk");
})
.catch(err => 
    console.log(err)
)
}
