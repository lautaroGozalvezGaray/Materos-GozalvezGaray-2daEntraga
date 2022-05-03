class Productos{
    constructor(categoria, precio, tipo){
        this.categoria=categoria;
        this.precio=parseInt(precio);
        this.tipo=tipo;
    }
    sumarIva(){
        this.precio*=1.21;
    }
}

//creacion de productos con sus caracteristicas

const producto1 = new Productos("mates", 1000, "mate de calabaza");
const producto2 = new Productos("mates", 2500, "mate de madera");
const producto3 = new Productos("mates", 4000, "mate de grande");
const producto4 = new Productos("mates", 5800, "mate de chico");
const producto5 = new Productos("termos", 8000, "mate de cuero");
const producto6 = new Productos("termos", 9000, "termo 1.5l");
const producto7 = new Productos("termos", 8500, "termo 1l");
const producto8 = new Productos("termos", 5000, "termo economico");
const producto9 = new Productos("termos", 7800, "termo con pico");
const producto10 = new Productos("termos", 6000, "termo economico 1.5");
const producto11 = new Productos("mochilas", 12000, "mochila grande");
const producto12 = new Productos("mochilas", 10000, "mochila chica");
const producto13 = new Productos("mochilas", 13500, "mochila grande con bolcillo");
const producto14 = new Productos("mochilas", 15000, "mochila grande roja");
const producto15 = new Productos("mochilas", 18000, "mochila grande azul");

//se almacena todos los productos en una variable stock para su posterior uso

let stock=[];

stock.push(producto1, producto2, producto3, producto4, producto5,
    producto6,producto7,producto8,producto9,producto10,producto11,
    producto12,producto13,producto14,producto15);

//se le suma iva a cada producto
for (const productos of stock){
    productos.sumarIva();
}