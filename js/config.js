const container = document.querySelector(".container"),
qrInput = container.querySelector(".form input"),
geradorBtn = container.querySelector(".form button"),
qrImg = container.querySelector(".qr-code img");

geradorBtn.addEventListener("click", () => {

    let qrValue = qrInput.value;
    if(!qrValue) return;
    geradorBtn.innerText = "Gerando QR code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        geradorBtn.innerText = "Gerar QR Code.";
    });  
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        container.classList.remove("active");
    }
});
