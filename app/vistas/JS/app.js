const btnCargar = document.getElementById("BtnCargar"); //Cargan los nombres de los clientes en el select 
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



const btncargar = document.getElementById("Btncargar"); //carga el precio y cantidad de los productos y los acomoda en la tabla del html
btncargar.addEventListener("click", () => {
    fetch('http://localhost:1339/api/product')
  .then(response => response.json())
  .then(json => {
      const data = document.getElementById("data") //modificarlo a forma de selec
      let body = ''
      for (let i = 0; i < json.length; i++) {
         body += `<tr><td>${json[i].id}</td><td>${json[i].name}</td><td>${json[i].quantity}</td><td>${json[i].cost}</td></tr>`
    }
        document.getElementById("data").innerHTML = body;
  });
});

const btnagregarproducto = document.getElementById("btnaddproducto");
btnagregarproducto.addEventListener("click", () => {
    let name = document.getElementById("txtnproducto").value ;
    let precio = document.getElementById("txtpreproducto").value;
    let cantidad = document.getElementById("txtcantidad").value;
    let data = {
             name:name,
             cost:precio,
             quantity:cantidad
            }
        console.log(data);

    fetch ('http://localhost:1339/api/product', {
        method:'Post',
        body:JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
    })    
    .then(response => response.json())
    .then(json => {
        let didprod = document.getElementById("detproductos");

        detproductos.innerHTML += 
        '<p>se agrego el producto a la base de datos</p>'
    })
})