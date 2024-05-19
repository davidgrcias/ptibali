function sendMail() {
  (function () {
    emailjs.init("IMhDqFBmKXuSUzNx1"); // Account Public Key
  })();

  var params = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  var serviceID = "service_qloyq9q"; // Email Service ID
  var templateID = "template_zcvean9"; // Email Template ID

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email sent successfully!!");
    })
    .catch();
}
