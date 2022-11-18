const menuToggle = document.querySelector(".toggle")
const showcase = document.querySelector(".showcase")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
})

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send()
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".specialist").innerHTML = data.specialist;
    })
})