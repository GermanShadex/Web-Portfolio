const logo = document.getElementById('logo');
const brad = logo.style.borderRadius;

logo.addEventListener('click', ShowQRCode);

function ShowQRCode() {
    if (logo.getAttribute('src') === "pictures/logo.png") {
        logo.src = "pictures/qrcode.png";
        logo.style.borderRadius = "0px";
        logo.style.opacity = "0.85";
    } else {
        logo.src = "pictures/logo.png";
        logo.style.borderRadius = brad;
        logo.style.opacity = "1";
    }
}