let mprods = new Map ();
let carrito = new Array();

const btnCargar = document.getElementById("btnCargarcliente"); //Cargan los nombres de los clientes en el select 
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



const btncargar = document.getElementById("btncargarproducto"); //carga el precio y cantidad de los productos y los acomoda en la tabla del html
btncargar.addEventListener("click", () => {
    fetch('http://localhost:1339/api/product')
  .then(response => response.json())
  .then(json => {
      const data = document.getElementById("slproducto") //modificarlo a forma de selec 
      let optionsproducto="";
      for (let i = 0; i<json.length; i++) {
        mprods.set(json[i].id , json[i]); 
        optionsproducto += `<option value='${json[i].id}'>${json[i].name}</option>`
      }
      data.innerHTML = optionsproducto;
  });
});

const btnagregarproducto = document.getElementById("btnaddproducto"); //Agregar nuevos productos a la base de datos a traves de un formulario
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



//agregar clientes a la base de datos a traves de un formulario


    const Btnagregarproducto = document.getElementById("btnaddcliente"); //Agregar nuevos productos a la base de datos a traves de un formulario
    Btnagregarproducto.addEventListener("click", () => {
    let name = document.getElementById("txtnombre").value ;
    let rfc = document.getElementById("txtrf").value;
    let Zipcode = document.getElementById("txtzipcode").value; 
    let data = {
             Name:name,
             Rfc:rfc,
             Zipcode:Zipcode
            }
        console.log(data);

    fetch ('http://localhost:1339/api/client', {
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