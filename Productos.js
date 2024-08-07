"use strict";

let productos = [
    {
        "id": 1,
        "nombre": "Arroz Luchetti",
        "precio": 2880,
        "stock": 30,
        "descripcion": "Arroz Luchetti es una variedad de arroz que se extrae de la hoja de la planta de arroz y se le da la variedad de sabor que le corresponde. Es una de las principales variedades de arroz en el mundo, y es uno de los ingredientes más populares en la cocina.",
        "imagen": "arroz.jpg"
    },
    {
        "id": 2,
        "nombre": "Azucar Ledesma",
        "precio": 1234,
        "stock": 40,
        "descripcion": "Azucar Ledesma es una variedad de producto alimentario que se extrae de la hoja de la planta de azucar y se le da la variedad de sabor que le corresponde. Es una de las principales variedades de azucar en el mundo, y es uno de los ingredientes más populares en la cocina.",
        "imagen": "azucar.jpeg"
    },
    {
        "id": 3,
        "nombre": "Jabon Rexona",
        "precio": 2727,
        "stock": 20,
        "descripcion": "Jabon Rexona es una variedad de producto alimentario que se extrae de la hoja de la planta de jabon y se le da la variedad de sabor que le corresponde. Es una de las principales variedades de jabon en el mundo, y es uno de los ingredientes más populares en la cocina.",
        "imagen": "jabonRexona.jpg"
    },
    {
        "id": 4,
        "nombre": "Leche La Serenisima",
        "precio": 3250,
        "stock": 18,
        "descripcion": "Leche La Serenisima es una variedad de producto alimentario que se extrae de la hoja de la planta de leche y se le da la variedad de sabor que le corresponde. Es una de las principales variedades de leche en el mundo, y es uno de los ingredientes más populares en la cocina.",
        "imagen": "lecheZeroLactosa.jpg"
    },
    {
        "id": 5,
        "nombre": "Mani King Pizza",
        "precio": 1391,
        "stock": 20,
        "descripcion": "Mani King Pizza es una variedad de producto alimentario que se extrae de la hoja de la planta de mani y se le da la variedad de sabor que le corresponde. Es una de las principales variedades de mani en el mundo, y es uno de los ingredientes más populares en la cocina.",
        "imagen": "maniKingPizza.jpg"
    },
    {
        "id": 6,
        "nombre": "Nescafe Gold",
        "precio": 14960,
        "stock": 30,
        "descripcion": "Nescafe Gold es una variedad de producto alimentario que se extrae de la hoja de la planta de mani y se le da la variedad de sabor que le corresponde. Es una de las principales variedades de mani en el mundo, y es uno de los ingredientes más populares en la cocina.",
        "imagen": "nescafeGold.jpg"
    },
    {
        "id": 7,
        "nombre": "Nesquik Clasico",
        "precio": 2505,
        "stock": 15,
        "descripcion": "Nesquik Clasico es una variedad de producto alimentario que se extrae de la hoja de la planta de mani y se le da la variedad de sabor que le corresponde. Es una de las principales variedades de mani en el mundo, y es uno de los ingredientes más populares en la cocina.",
        "imagen": "nesquik.jpg"
    },
    {
        "id": 8,
        "nombre": "Jabon Liquido Skip P/ Diluir",
        "precio": 6447,
        "stock": 18,
        "descripcion": "Jabon Liquido Skip P/ Diluir es una variedad de producto alimentario que se extrae de la hoja de la planta de mani y se le da la variedad de sabor que le corresponde. Es una de las principales variedades de mani en el mundo, y es uno de los ingredientes más populares en la cocina.",
        "imagen": "skipDiluir.jpg"
    },
    {
        "id": 9,
        "nombre": "Yerba Playadito",
        "precio": 4199,
        "stock": 22,
        "descripcion": "Yerba Playadito es una variedad de producto alimentario que se extrae de la hoja de la planta de mani y se le da la variedad de sabor que le corresponde. Es una de las principales variedades de mani en el mundo, y es uno de los ingredientes más populares en la cocina.",
        "imagen": "yerbaPlayadito.jpg"
    },
    {
        "id": 10,
        "nombre": "Yogurisimo Griego",
        "precio": 2840,
        "stock": 15,
        "descripcion": "Yogurisimo Griego es una variedad de producto alimentario que se extrae de la hoja de la planta de mani y se le da la variedad de sabor que le corresponde. Es una de las principales variedades de mani en el mundo, y es uno de los ingredientes más populares en la cocina.",
        "imagen": "yogurisimoGriego.jpg"
    }

];


cargarProductos();
let cantidades = document.querySelectorAll("#cant"); /* Imputs Cantidades */
let botones = document.querySelectorAll(".btn-carrito"); /* Botones Añadir al carrito */
let btnFinalizarCompra = document.getElementById("finalizarCompra");
let carrito = [];


// -----------------------------------CARGA DE PRODUCTOS--------------------------------------------------
function cargarProductos() {
    let contenedor = document.querySelector(".contenedor-items");
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        let item = document.createElement("div");
        item.classList.add("item");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;
        figure.appendChild(img);
        item.appendChild(figure);
        let divInfoProducto = document.createElement("div");
        divInfoProducto.classList.add("info-producto");


// nescafe gold
        let h2 = document.createElement("h2");
        h2.innerText = producto.nombre;
        divInfoProducto.appendChild(h2);
// supuestamente precio
        let pPrecio = document.createElement("p");
        pPrecio.innerText = `Precio: $${producto.precio}`;
        divInfoProducto.appendChild(pPrecio);
        let input = document.createElement("input");
        input.type = "number";
        input.name = "cantidad";
        input.id = "cant" + producto.id;
        input.min = "1";
        input.value = "1";
        divInfoProducto.appendChild(input);
        let button = document.createElement("button");
        button.id = producto.id;
        button.classList.add("btn-carrito");
        button.innerText = "Añadir al carrito";
        let p = document.createElement("p");
        p.id="stock"+producto.id;
        p.innerText = `stock: ${producto.stock}`;
        divInfoProducto.appendChild(button);
        divInfoProducto.appendChild(p);
        item.appendChild(divInfoProducto);
        contenedor.appendChild(item);
    }
}

// --------------------RECORRE BOTONES-------------------------------
botones.forEach(boton => {
    // iterar sobre una lista de botones//
    boton.addEventListener("click", () => {
        let idProducto = parseInt(boton.id);
        let idInput = `#cant${idProducto}`;
        let cantidadInput = document.querySelector(idInput);
        let cantidad = parseInt(cantidadInput.value); // Convertimos la cantidad a entero
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingresa una cantidad válida mayor a cero.");
            return;
        }
        let productoChango;
        let productoActual;
        let stock;
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];
            if (producto.id === idProducto) {
                stock = document.querySelector(`#stock${idProducto}`);
                productoActual = producto;
                productoChango = {
                    "id": producto.id,
                    "nombre": producto.nombre,
                    "precio": producto.precio,
                    "descripcion": producto.descripcion,
                    "imagen": producto.imagen,
                };
            }
        }
        if (productoActual.stock >= cantidad) {
            stock.innerText = `stock: ${productoActual.stock - cantidad}`;
            carrito.push({
                "id": idProducto,
                "nombre": productoChango.nombre,
                "precio": productoChango.precio,
                "cantidad": cantidad,
                "descripcion": productoChango.descripcion,
                "imagen": productoChango.imagen,
            });
            productoActual.stock -= cantidad;
            mostrarCarritoProducto();
        } else {
            alert(`El stock máximo de ${productoActual.nombre} es ${productoActual.stock}`);
        }
    });
});
// --------------------FUNCION PARA CARGAR CARRITO------------------
// function mostrarCarritoProducto() {
//     let contenedorCarrito = document.querySelector(".carrito");
//     contenedorCarrito.innerHTML = "";
//     let titulo = document.createElement("h2");
//     titulo.innerText = "Mi Compra";
//     contenedorCarrito.appendChild(titulo);
//     let totalGastado = 0; // Variable para acumular el total gastado
//     for (let i = 0; i < carrito.length; i++) {
//         let producto = carrito[i];
//         let divCarritoFondo = document.createElement("div");
//         divCarritoFondo.classList.add("carrito-fondo");
//         let descripcionProducto = document.createElement("span");
//         descripcionProducto.innerText = producto.nombre;
//         let cantidadProducto = document.createElement("span");
//         cantidadProducto.innerText = producto.cantidad;
//         let totalProducto = document.createElement("span");
//         totalProducto.innerText = `$${producto.cantidad * producto.precio}`;
//         divCarritoFondo.appendChild(descripcionProducto);
//         divCarritoFondo.appendChild(cantidadProducto);
//         divCarritoFondo.appendChild(totalProducto);
//         contenedorCarrito.appendChild(divCarritoFondo);
//         // Acumulamos el total gastado
//         totalGastado += producto.cantidad * producto.precio;
//     }
//     // Mostrar el total gastado
//     let totalElement = document.createElement("div");
//     totalElement.classList.add("total-gastado");
//     totalElement.innerHTML = `<strong>Total Gastado: $${totalGastado}</strong>`;
    

//     contenedorCarrito.appendChild(totalElement);
// }
// guardar compra en un txt
function mostrarCarritoProducto() {
    let contenedorCarrito = document.querySelector(".carrito");
    contenedorCarrito.innerHTML = "";
    let titulo = document.createElement("h2");
    titulo.innerText = "Mi Compra";
    contenedorCarrito.appendChild(titulo);
    let totalGastado = 0; // Variable para acumular el total gastado
    let gastoTotal = "Mi Compra "; 

    if (carrito && carrito.length > 0) {
        for (let i = 0; i < carrito.length; i++) {
            let producto = carrito[i];
            let divCarritoFondo = document.createElement("div");
            divCarritoFondo.classList.add("carrito-fondo");
            let descripcionProducto = document.createElement("span");
            descripcionProducto.innerText = producto.nombre;
            let cantidadProducto = document.createElement("span");
            cantidadProducto.innerText = producto.cantidad;
            let totalProducto = document.createElement("span");
            totalProducto.innerText = `$${(producto.cantidad * producto.precio).toLocaleString()}`;
            divCarritoFondo.appendChild(descripcionProducto);
            divCarritoFondo.appendChild(cantidadProducto);
            divCarritoFondo.appendChild(totalProducto);
            contenedorCarrito.appendChild(divCarritoFondo);
            // aca se acumula el total de la compra
            totalGastado += producto.cantidad * producto.precio;
            // aca se agrega esa info 
            gastoTotal += `${producto.nombre} - Cantidad: ${producto.cantidad} - Total: $${(producto.cantidad * producto.precio).toLocaleString()}\n`;
        }
        // Aca mostramos el total gastado por el usuario
        let totalElement = document.createElement("div");
        totalElement.classList.add("total-gastado");
        totalElement.innerHTML = `<strong>Total Gastado: $${totalGastado.toLocaleString()}</strong>`;
        contenedorCarrito.appendChild(totalElement);
        // Agregar el total gastado al contenido del archivo
        gastoTotal += `Total Gastado: $${totalGastado.toLocaleString()}`;
    }

    // Crear un enlace de descarga con el nombre finalizar compra y guardo en el txt
    let enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = URL.createObjectURL(new Blob([gastoTotal], { type: 'text/plain' }));
    enlaceDescarga.download = "compra.txt";
    enlaceDescarga.innerText = "Finalizar Compra";
    contenedorCarrito.appendChild(enlaceDescarga);
}
