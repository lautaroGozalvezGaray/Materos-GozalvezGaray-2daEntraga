
localStorage.clear()

//array donde se van almacenar los objetos del storage

let arrayProductos = [];

function agregarALocalStorage (producto) {

    // Obtenemos los productos del localStorage

    const stock = localStorage.getItem("productos");

    stock !== null && (arrayProductos = JSON.parse(stock));

    // Agregamos el nuevo producto al localStorage

    arrayProductos.push(producto);

    // Setear el localStorage

    localStorage.setItem("productos", JSON.stringify(arrayProductos));

}

//CREAMOS UNA FUNCION QUE VA CALCULAR EL TOTAL DEPENDIENDO LOS OBJ QUE HAY EN EL STORAGE

let total="";

function sumarTotal(){
    for (const costo of arrayProductos){
        total=parseInt(total+costo.precio);
    }
    let p = document.getElementById("total");
    
    p.innerText=`El total de su compra es de $ ${total}`;

    btnTotal.setAttribute("disabled","false");//desactivar boton de total
}

//FUNCION PARA VACIAR CARRITO Y PONER EN 0 EL TOTAL
function clearBuy(){
    total=0;
    arrayProductos=[];
    btnTotal.removeAttribute("disabled");//activar boton de total
    localStorage.clear();
    let pb = document.getElementById("total");
    pb.innerText="";

    let table=document.getElementById("productoSeleccionados");
    while(table.lastChild){
        table.removeChild(table.lastChild);
    }
}


//BOTON CALCULAR TOTAL

let btnTotal = document.getElementById("btnTotal");
btnTotal.addEventListener("click", (e) => {
    sumarTotal();
})

//BOTON BORRAR TOTAL. PERMITE AGREGAR NUEVOS PRODUCTOS Y CALCULAR DE NUEVO EL TOTAL

let btnborrar = document.getElementById("btnborrar");
btnborrar.addEventListener("click", (e) => {
    clearBuy();
}) 

//BOTONES DE PRODUCTOS

const table = document.getElementById("productoSeleccionados");

//funcion que agrega al localstorage y añade el elemento al carrito
function btnProduct(producto){
    agregarALocalStorage(producto);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto.categoria}</td> <td>${producto.tipo}</td> <td>$${producto.precio}*</td>`;
    // agregando columnas a tabla
    table.append(td);
    return producto;
}

let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', (e) => {
    btnProduct(producto=producto1);
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener('click', (e) => {
    btnProduct(producto=producto2);
})

let btn3 = document.getElementById("btn3");
btn3.addEventListener('click', (e) => {
    btnProduct(producto=producto3);
})

let btn4 = document.getElementById("btn4");
btn4.addEventListener('click', (e) => {
    btnProduct(producto=producto4);
})

let btn5 = document.getElementById("btn5");
btn5.addEventListener('click', (e) => {
    btnProduct(producto=producto5);
})

let btn6 = document.getElementById("btn6");
btn6.addEventListener('click', (e) => {
    btnProduct(producto=producto6);
})

let btn7 = document.getElementById("btn7");
btn7.addEventListener('click', (e) => {
    btnProduct(producto=producto7);
})

let btn8 = document.getElementById("btn8");
btn8.addEventListener('click', (e) => {
    btnProduct(producto=producto8);
})

let btn9 = document.getElementById("btn9");
btn9.addEventListener('click', (e) => {
    btnProduct(producto=producto9);
})

let btn10 = document.getElementById("btn10");
btn10.addEventListener('click', (e) => {
    btnProduct(producto=producto10);
})

let btn11 = document.getElementById("btn11");
btn11.addEventListener('click', (e) => {
    btnProduct(producto=producto11);
})

let btn12 = document.getElementById("btn12");
btn12.addEventListener('click', (e) => {
    btnProduct(producto=producto12);
})

let btn13 = document.getElementById("btn13");
btn13.addEventListener('click', (e) => {
    btnProduct(producto=producto13);
})

let btn14 = document.getElementById("btn14");
btn14.addEventListener('click', (e) => {
    btnProduct(producto=producto14);
})

let btn15 = document.getElementById("btn15");
btn15.addEventListener('click', (e) => {
    btnProduct(producto=producto15);
})

