// tienda de bebidas, si tenes menos de 18, te salta un mensaje 
localStorage.setItem ("nombre", "Tomas")

/* let edad= (prompt("Ingrese su edad"));

if (edad <18) {
    document.getElementById("titulo").innerHTML = "Sos menor de edad"
    document.getElementById("menu").innerHTML = "No podes visitar la pagina"
}; */


const nombre= localStorage.getItem("nombre");

const spanNode = document.getElementById ("nombre");

spanNode.innerHTML= hola; 

const boton = document.getElementById("boton");

const productos = [
    {
        id: 1,
        producto: "fernet",
        precio: 1000,
    },
    {
        producto: "cerveza",
        precio: 300,
    },
    {
        producto: "vino",
        precio: 600,
    },
    {
        producto: "gin",
        precio: 800,
    },
    {
        producto: "ron",
        precio: 1200,
    },
    {
        producto: "jagger",
        precio: 3000,
    }
];

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

for (const producto of productos) { 
    guardarLocal (producto.id, JSON.stringify(producto));
}


const agregoProducto = () => {
    const indiceProducto = Math.round(Math.random());
    const producto = productos[indiceProducto];
    
    const nuevoProductoHTML = `<div><h4>${producto.nombre}</h4><p>Precio: ${producto.precio}</p></div>`;
    
    productos.innerHTML += nuevoProductoHTML;
    console.log(nuevoProductoHTML);
    console.log("Añadiste el producto:", producto.nombre);
    };
    
    boton.addEventListener("click", agregoProducto);


