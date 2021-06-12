const form = window.document.querySelector("form");

form.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
});