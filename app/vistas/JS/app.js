const btnCargar = document.getElementById("BtnCargar"); //Cargan los nombres de los clientes
btnCargar.addEventListener("click", () => {
    fetch('http://localhost:1339/api/client/')
    .then(response => response.json())
    .then(json => {
        const Slclientes = document.getElementById("Slclientes")
        let options="";
        for (let i = 0; i<json.length; i++) {
           options += `<option value='${json[i].id}'>${json[i].Name}</option>`
        }
        Slclientes.innerHTML = options;
    })   
});



const Btncargar = document.getElementById("Btncargar"); //carga el precio y cantidad de los productos
Btncargar.addEventListener("click", () => {
    fetch('http://localhost:1339/api/product')
  .then(response => response.json())
  .then(json => {
      const data = document.getElementById("data")
      let body = ''
      for (let i = 0; i < json.length; i++) {
         body += `<tr><td>${json[i].id}</td><td>${json[i].name}</td><td>${json[i].quantity}</td><td>${json[i].cost}</td></tr>`
    }
        document.getElementById("data").innerHTML = body;
  });
});