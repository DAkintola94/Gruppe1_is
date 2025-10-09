
let lastSubmissionTime = 0;

function sendEmail() {
    const now = Date.now();

    // Block if under 10 sec since last submission
    if (now - lastSubmissionTime < 10000) {
        alert("Vent litt før du sender en ny melding.");
        return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !message) {
        alert("Vennligst fyll ut alle feltene før du sender.");
        return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Ugyldig e-postadresse. Vennligst skriv inn en gyldig adresse.");
        return;
    }

    const paramsValue = { name, email, message };
    const serviceID = "service_1e4t18b";
    const templateID = "template_bchugar";

    // Disable button during submission
    const button = document.querySelector("form button[type='submit']");
    button.disabled = true;

    emailjs.send(serviceID, templateID, paramsValue)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Din melding har blitt sendt, tusen takk!");
            lastSubmissionTime = Date.now(); // mark submission time
        })
        .catch((err) => {
            console.error(err);
            alert("Noe gikk galt. Prøv igjen senere.");
        })
        .finally(() => {
            // Always re-enable button after 10 sec
            setTimeout(() => {
                button.disabled = false;
            }, 10000);
        });
}
