const container = document.querySelector(".container"),
geradorBtn = container.querySelector(".form button");

geradorBtn.addEventListener("click", () => {
    container.classList.add("active");
})