
class Instrumento {
    constructor(nombre, descripcion, precio, img, ver) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.img = img;
      this.ver = ver;
    }
  }

const verLista = () => {
    //listaProductos.map(d => console.log(d))
}


listaCarrito= [];

const i1 = new Instrumento('Bateria', 'bat', 60000, '../resources/img/bateria.jpeg', 'Bateria'); 
const i2 = new Instrumento('Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 

let alias = [
    i1,
    i2
];
function listar(){
    console.log('metodo ejecrici')
    for(let elem of alias){
        document.querySelector("#resultado").innerHTML += 
        "<li>"+
        elem.nombre + ' $' +  elem.precio+ 'ver es : '+ elem.ver +  "<img width='30%' height='30%' src='"+ elem.img +"'"+
        ' onclick="ir('+elem.ver+')"> </img>'+
        '<button id="btnVer" onclick="ir('+elem.ver+')">Ver</button>' +
        "<button id='btnAgregar' onclick='agregar("+elem+")'>Agregar</button>"+
        "</li>";
    }
}

let btnVer = (elem) => {
    return '<button id="btnVer" onclick="ir('+elem+')">Ver</button>'
}


const ir = (donde) => {
    console.log(donde)
}


const agregar = (elem) => {
    listaCarrito.push(elem)
} 



const verCarrito = () => {
    listaCarrito.forEach(element => {
        console.log(element.nombre)
    });
}