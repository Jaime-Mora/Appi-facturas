const btnCargar = document.getElementById("BtnCargar"); //Cargan los nombres de los clientes
btnCargar.addEventListener("click", () => {
    fetch('http://localhost:1339/api/client/')
    .then(response => response.json())
    .then(json => {
        const Slclientes = document.getElementById("Slclientes")
        let options=""
        for (let i = 0; i<json.length; i++) {
           options += `<option value='${json[i].id}'>${json[i].Name}</option>`
        }
        Slclientes.innerHTML = options;
    })   
});

//Crear 