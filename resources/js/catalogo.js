
let cantidad = 0;

const verLista = () => {
    //listaProductos.map(d => console.log(d))
}



let btnVer = (elem) => {
    return '<button id="btnVer" onclick="ir('+elem+')">Ver</button>'
}


function ir(donde) {
    console.log(JSON.stringify(donde))
}


const agregar = (id) => {
    console.log('agregar al carrito')
    const lista = JSON.parse(window.localStorage.getItem('carrito'))
    let existe = false;
    const data = JSON.parse(window.localStorage.getItem('data'))
    const producto = data.find(a => a.id == id);
    console.log(producto)
    this.cantidad = this.cantidad !== undefined && this.cantidad !== null ? this.cantidad : 1;
    console.log('cantidad: ' + this.cantidad)
    if (lista !== null) {
        console.log(lista);
        lista.forEach(element => {
            if (element.producto.id == id) {
                existe = true;
                const cant = parseInt(element.cantidad);
                const cantMas = parseInt(this.cantidad);
                element.cantidad =  cant+ cantMas;
            }
        });
        if (!existe) {
            const data = JSON.parse(window.localStorage.getItem('data'))
            const producto = data.find(a => a.id == id);
            lista.push({producto: producto, cantidad: parseInt(this.cantidad)});    
        }
        window.localStorage.setItem('carrito', JSON.stringify(lista));

    } else {
        console.log('Lista es: ' + lista)
        const c = [{producto: producto, cantidad: parseInt(this.cantidad)}]
        console.log(c)
        window.localStorage.setItem('carrito', JSON.stringify(c));
    }    
    document.getElementsByClassName("cant").value = 1;
    document.querySelectorAll("txtCantidad").forEach(q => q.value = 1);


    //this.cantidad = 1;
} 

const nuevaCantidadEs = (n) => {
    console.log(n)
    this.cantidad = n;
    if (n == null || n == undefined) {
        alert('La cantidad debe de ser al menos de 1')
    }
}


const focus = () => {
    this.cantidad = 1;
}




const verCarrito = () => {
    listaCarrito.forEach(element => {
        console.log(element.nombre)
    });
}


listaCarrito= [];


const lista = JSON.parse(window.localStorage.getItem('data'));

console.log(lista);

for (let elem of lista) {
    document.querySelector("#catalogo").innerHTML += 
    '<form>' +
        '<div>' +
            "<li key='"+elem.id+"'>"+
            elem.nombre + ' $' +  elem.precio+ 'ver es : '+ elem.ver +  "<img width='30%' height='30%' src='"+ elem.img +"'"+
            ' onclick="ir('+elem.ver+')"> </img>'+
            //'<inpput type="submit" id="btnVer" onclick="ir('+elem.ver+')">Ver</button>' +
            '<input type="submit" id="btnAgregar" value="Agregar" onclick="agregar('+elem.id+')"></input>'+
            '<input class="cant" type="number" id="txtCantidad" onchange="nuevaCantidadEs(value)" onblur="focus()" >Cantidad</input>'+
            "</li>" +
        '</div>' +
    '</form>';
}


