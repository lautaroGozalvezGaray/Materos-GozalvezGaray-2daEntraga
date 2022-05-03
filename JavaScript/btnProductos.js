
localStorage.clear()

//array donde se van almacenar los objetos del storage

let arrayProductos = [];

function agregarALocalStorage (producto) {

    // Obtenemos los productos del localStorage

    const stock = localStorage.getItem("productos");

    if(stock !== null) {
        arrayProductos = JSON.parse(stock);
    }

    // Agregamos el nuevo producto al localStorage

    arrayProductos.push(producto);

    // Setear el localStorage

    localStorage.setItem("productos", JSON.stringify(arrayProductos));

}

//CREAMOS UNA FUNCION QUE VA CALCULAR EL TOTAL DEPENDIENDO LOS OBJ QUE HAY EN EL STORAGE

total="";

function sumarTotal(){
    for (const costo of arrayProductos){
        total=parseInt(total+costo.precio);
    }
    let p = document.getElementById("total");
    
    p.innerText=`$ ${total}`;
        
    console.log(total)
    console.log(arrayProductos)
}


//BOTON PRODUCTO 1 + SELECT 1 

/*btn1.setAttribute("disabled", "false");
let select1=document.getElementById("select1");
select1.addEventListener("change", ()=>{
    if(select1.value==0){
        btn1.setAttribute("disabled", "false")
    }else if(select1.value>=1){
        btn1.removeAttribute("disabled")
    }
}) */

//BOTON CALCULAR TOTAL

let btnTotal = document.getElementById("btnTotal");
btnTotal.addEventListener("click", (e) => {
    sumarTotal();
    btnTotal.setAttribute("disabled", "false");
})

//BOTONES DE PRODUCTOS

const table = document.getElementById("productoSeleccionados");

let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', (e) => {
    agregarALocalStorage(producto1);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto1.categoria}</td> <td>${producto1.tipo}</td> <td>$${producto1.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener('click', (e) => {
    agregarALocalStorage(producto2);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto2.categoria}</td> <td>${producto2.tipo}</td> <td>$${producto2.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn3 = document.getElementById("btn3");
btn3.addEventListener('click', (e) => {
    agregarALocalStorage(producto3);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto3.categoria}</td> <td>${producto3.tipo}</td> <td>$${producto3.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn4 = document.getElementById("btn4");
btn4.addEventListener('click', (e) => {
    agregarALocalStorage(producto4);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto4.categoria}</td> <td>${producto4.tipo}</td> <td>$${producto4.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn5 = document.getElementById("btn5");
btn5.addEventListener('click', (e) => {
    agregarALocalStorage(producto5);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto5.categoria}</td> <td>${producto5.tipo}</td> <td>$${producto5.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn6 = document.getElementById("btn6");
btn6.addEventListener('click', (e) => {
    agregarALocalStorage(producto6);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto6.categoria}</td> <td>${producto6.tipo}</td> <td>$${producto6.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn7 = document.getElementById("btn7");
btn7.addEventListener('click', (e) => {
    agregarALocalStorage(producto7);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto7.categoria}</td> <td>${producto7.tipo}</td> <td>$${producto7.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn8 = document.getElementById("btn8");
btn8.addEventListener('click', (e) => {
    agregarALocalStorage(producto8);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto8.categoria}</td> <td>${producto8.tipo}</td> <td>$${producto8.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn9 = document.getElementById("btn9");
btn9.addEventListener('click', (e) => {
    agregarALocalStorage(producto9);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto9.categoria}</td> <td>${producto9.tipo}</td> <td>$${producto9.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn10 = document.getElementById("btn10");
btn10.addEventListener('click', (e) => {
    agregarALocalStorage(producto10);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto10.categoria}</td> <td>${producto10.tipo}</td> <td>$${producto10.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn11 = document.getElementById("btn11");
btn11.addEventListener('click', (e) => {
    agregarALocalStorage(producto11);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto11.categoria}</td> <td>${producto11.tipo}</td> <td>$${producto11.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn12 = document.getElementById("btn12");
btn12.addEventListener('click', (e) => {
    agregarALocalStorage(producto12);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto12.categoria}</td> <td>${producto12.tipo}</td> <td>$${producto12.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn13 = document.getElementById("btn13");
btn13.addEventListener('click', (e) => {
    agregarALocalStorage(producto13);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto13.categoria}</td> <td>${producto13.tipo}</td> <td>$${producto13.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn14 = document.getElementById("btn14");
btn14.addEventListener('click', (e) => {
    agregarALocalStorage(producto14);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto14.categoria}</td> <td>${producto14.tipo}</td> <td>$${producto14.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

let btn15 = document.getElementById("btn15");
btn15.addEventListener('click', (e) => {
    agregarALocalStorage(producto15);
    // Crear columnas
    const td = document.createElement("tr");
    td.innerHTML = `<td>${producto15.categoria}</td> <td>${producto15.tipo}</td> <td>$${producto15.precio}</td>`;
    // agregando columnas a tabla
    table.append(td);
})

//BOTON BORRAR TOTAL. PERMITE AGREGAR NUEVOS PRODUCTOS Y CALCULAR DE NUEVO EL TOTAL

let btnborrar = document.getElementById("btnborrar");
btnborrar.addEventListener("click", (e) => {
    let pb = document.getElementById("total");
    pb.innerText="";
    total=0;
    btnTotal.removeAttribute("disabled")
})