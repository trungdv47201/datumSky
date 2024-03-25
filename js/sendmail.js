const from = "business@datumsky.com";
const to = "business@datumsky.com";
const subject = "Datumsky";
const token = "a35402a0-4b9e-4faa-ad27-8ea59df467ec";
function send(params, filename) {
    let emailTemplate = "";
    fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load email-template.html");
            }
            return response.text();
        })
        .then(data => {
            emailTemplate = data;
        })
        .catch(error => {
            console.error(error.message);
        });
    $('.send-mail').on('click', function () {
        const email = $("#email").val();
        if (valid(params, email)) {
            const body = `<p style="margin: 0;"><b>Email address:</b> ${email}</p>` + getBody(params);
            emailTemplate = emailTemplate.replaceAll("${body}", body);
            Email.send({
                SecureToken: token,
                To: to,
                From: from,
                Subject: subject,
                Body: emailTemplate
            }).then(
                Swal.fire({
                    title: "Sent!",
                    text: "You clicked the button!",
                    icon: "success"
                })
            );
            $(".swal2-confirm").on('click', function () {
                window.location.href = window.location.origin;
            });
        }
    });
}

function getBody(params) {
    if (params.length == 0) {
        return "";
    }
    let body = "";
    for (let [key, value] of params) {
        const val = $("#" + value).val();
        body += `<p style="margin: 0;"><b>${key}:</b> ${val}</p>`
    }
    return body;
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function valid(params, email) {
    let msg = "";
    if (email == "") {
        msg += "Email must be not empty!</br>";
    } else if (!validateEmail(email)) {
        msg += "Email invalid!</br>";
    }
    for (let [key, value] of params) {
        const val = $("#" + value).val();
        if (val == "") {
            msg += key + " must be not empty!</br>";
        }
    }
    if (msg != "") {
        Swal.fire({
            html: msg,
            icon: "info"
        });
        return false;
    }
    $('.send-mail').prop("disabled", true);
    return true;
}