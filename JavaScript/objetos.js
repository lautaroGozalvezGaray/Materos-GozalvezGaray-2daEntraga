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

const producto1 = new Productos("mates", 3800, "alpaca cincelada");
const producto2 = new Productos("mates", 4100, "imperial criollo");
const producto3 = new Productos("mates", 7100, "imperial gold argentina");
const producto4 = new Productos("mates", 8300, "camionero cincelado");
const producto5 = new Productos("termos", 7500, "stanley metal");
const producto6 = new Productos("termos", 15000, "Stanley classic bottle 1,4 Lts");
const producto7 = new Productos("termos", 10900, "Stanley classic bottle 1 Lts");
const producto8 = new Productos("termos", 9800, "Stanley classic bottle 750 Ml");
const producto9 = new Productos("termos", 3300, "Keep 1L pico cebador");
const producto10 = new Productos("termos", 3200, "Termos ploteados");
const producto11 = new Productos("mochilas", 4900, "mochila cuenca negra");
const producto12 = new Productos("mochilas", 5300, "Mochila materok gris oscuro");
const producto13 = new Productos("mochilas", 6100, "Mochila matriona bordó");
const producto14 = new Productos("mochilas", 6000, "Mochila matriona azul");
const producto15 = new Productos("mochilas", 7000, "Mochila matera urbana verde");

//se almacena todos los productos en una variable stock para su posterior uso

let stock=[];

stock.push(producto1, producto2, producto3, producto4, producto5,
    producto6,producto7,producto8,producto9,producto10,producto11,
    producto12,producto13,producto14,producto15);

//se le suma iva a cada producto
for (const productos of stock){
    productos.sumarIva();
}