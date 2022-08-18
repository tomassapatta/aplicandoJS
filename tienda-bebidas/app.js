// tienda de bebidas, si tenes menos de 18, te salta un mensaje 

let edad= (prompt("Ingrese su edad"));

if (edad <18) {
    document.getElementById("titulo").innerHTML = "Sos menor de edad"
    document.getElementById("menu").innerHTML = "No podes visitar la pagina"
};

const boton = document.getElementById("boton");

const productos = [
    {
        nombre: "fernet",
        precio: 1000,
    },
    {
        nombre: "cerveza",
        precio: 300,
    },
    {
        nombre: "vino",
        precio: 600,
    },
    {
        nombre: "gin",
        precio: 800,
    },
    {
        nombre: "ron",
        precio: 1200,
    },
    {
        nombre: "jagger",
        precio: 3000,
    }
]

const agregoProducto = () => {
    const indiceProducto = Math.round(Math.random());
    const producto = productos[indiceProducto];
    
    const nuevoProductoHTML = `<div><h4>${producto.nombre}</h4><p>Precio: ${producto.precio}</p></div>`;
    
    productos.innerHTML += nuevoProductoHTML;
    console.log(nuevoProductoHTML);
    console.log("Añadiste el producto:", producto.nombre);
    };
    
    boton.addEventListener("click", agregoProducto);
