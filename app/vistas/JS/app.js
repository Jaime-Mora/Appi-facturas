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


    const Btnagregarproducto = document.getElementById("btnaddcliente"); //Agregar nuevos clientes a la base de datos a traves de un formulario
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


const btncarrito = document.getElementById("btncarrito");   //boton para agregar al carrito
btncarrito.addEventListener("click", () => {
    const product_id = document.getElementById("slproducto").value;
    const cant_prod = document.getElementById("txtCantidad").value;
    

    let detalle = {
        product_id : product_id,
        quantity : cant_prod,
        cost : mprods.get(parseInt(product_id)).cost
    }
    carrito.push(detalle)
    console.log(carrito);
});

const btnfactura = document.getElementById("btnfactura");   //creacion de la factura 
btnfactura.addEventListener("click", () => {
    const cliente_id = document.getElementById("Slclientes").value;
    let total = 1000
    let tax = 10
    let date = `2022/04/05`
    
    let data = {                                               //modifcar esta parte para el jueves
        client_id : cliente_id,
        payment : total,
        tax : tax,
        date : date,
        products : carrito
    }
    fetch ('http://localhost:1339/api/product'),{
        method : 'post',
        body : JSON.stringify(data),
       headers : {'Content-Type' : 'application/json'}
    }
});

