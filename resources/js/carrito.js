const lista = JSON.parse(window.localStorage.getItem('carrito'));

console.log(lista);

for (let elem of lista) {
    document.querySelector("#miCarrito").innerHTML += 
    '<form>' +
        '<div>' +
            "<li key='"+elem.producto.id+"'>"+
            elem.producto.nombre + ' $' +  elem.producto.precio+ 'ver es : '+ elem.ver +  "<img width='30%' height='30%' src='"+ elem.producto.img +"'> </img>'"+
            'Cantidad: ' + elem.cantidad + ' ' +
            'subTotal: $' + parseInt(elem.cantidad) * elem.producto.precio
            "</li>" +
        '</div>' +
    '</form>';
}