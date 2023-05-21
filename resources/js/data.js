class Instrumento {
    constructor(id, nombre, descripcion, precio, img, ver) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.img = img;
      this.ver = ver;
    }
}




const i1 = new Instrumento(1, 'Bateria', 'bat', 60000, '../resources/img/bateria.jpeg', 'Bateria'); 
const i2 = new Instrumento(2, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i3 = new Instrumento(3, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Guitarra'); 
const i4 = new Instrumento(4, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i5 = new Instrumento(5, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i6 = new Instrumento(6, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i7 = new Instrumento(7, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i8 = new Instrumento(8, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i9 = new Instrumento(9, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i10 = new Instrumento(10, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i11 = new Instrumento(11, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i12 = new Instrumento(12,'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i13 = new Instrumento(13, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i14 = new Instrumento(14, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i15 = new Instrumento(15, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i16 = new Instrumento(16, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 
const i17 = new Instrumento(17, 'Bateria2', 'bat', 160000, '../resources/img/bateria.jpeg', 'Bateria2'); 

let db = [
    i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17
];

console.log('cargar data')

window.localStorage.setItem('data', JSON.stringify(db));
