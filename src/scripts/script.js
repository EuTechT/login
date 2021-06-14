const form = window.document.querySelector("form");

form.addEventListener("submit", (event) => {
    // console.log(event);
    event.preventDefault();
});

const fields = window.document.querySelectorAll("[required]");
// console.log(fields);

function customValidation(event){
    // console.log(event);

    const field = event.target;
    // console.log(field);

    // console.log(field.validity);
    function verifyErrors(){
        let foundError = false;

        for(let error in field.validity){
            // console.log(error);

            if(error != "customError" && field.validity[error]){
                foundError = error;
            }
        }

        return foundError;
    }

    const error = verifyErrors();
    console.log("Error Exists: ", error);

    if(error){
        field.setCustomValidity("Esse campo é obrigatório!");
    } else {
        field.setCustomValidity("");
    }
}

for(field of fields){
    field.addEventListener("invalid", customValidation);
}