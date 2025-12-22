const logo = document.getElementById('logo');
let initialLogoBorderRadius = '';

if (logo) {
    initialLogoBorderRadius = window.getComputedStyle(logo).borderRadius;
    logo.addEventListener('click', ShowQRCode);
}

function ShowQRCode() {
    if (!logo) {
        return;
    }

    if (logo.getAttribute('src') === "pictures/logo.png") {
        logo.src = "pictures/qrcode.png";
        logo.style.borderRadius = "0px";
        logo.style.opacity = "0.85";
    } else {
        logo.src = "pictures/logo.png";
        logo.style.borderRadius = initialLogoBorderRadius;
        logo.style.opacity = "1";
    }
}

const galleryToggleButton = document.getElementById('gallery-toggle');

if (galleryToggleButton) {
    // Allow the CTA button to switch between the portfolio homepage and the gallery view.
    galleryToggleButton.addEventListener('click', handleGalleryToggleClick);
}

function handleGalleryToggleClick() {
    const currentPath = window.location.pathname.toLowerCase();
    const isGalleryPage = currentPath.includes('gallery.html');
    const targetUrl = isGalleryPage ? "index.html#home" : "gallery.html";
    window.location.href = targetUrl;
}