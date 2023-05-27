document.addEventListener('DOMContentLoaded', function() {
  const carritoIcon = document.getElementById('carrito-icon');
  const carritoOverlay = document.getElementById('carrito-overlay');
  const listaCarrito = document.getElementById('lista-carrito');
  const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
  const catalogo = document.getElementById('catalogo');
  let carrito = [];
  function cerrarCarrito() {
    carritoOverlay.style.display = 'none';
  }
  
  carritoIcon.addEventListener('click', function() {
    carritoOverlay.style.display = 'flex';
  });


  const cerrarCarritoBtn = document.getElementById('cerrar-carrito');
  cerrarCarritoBtn.addEventListener('click', cerrarCarrito);
  
  carritoOverlay.addEventListener('click', function(e) {
    if (e.target.id === 'carrito-overlay') {
      cerrarCarrito();
    }
  });
  function formatoPrecio(precio) {
    const opciones = {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    };
    return precio.toLocaleString(undefined, opciones);
  }
  function actualizarCarrito() {
    listaCarrito.innerHTML = '';

    carrito.forEach(function(producto) {
      const { nombre, precio, cantidad, imagen } = producto;

      const productoHTML = document.createElement('li');
      productoHTML.innerHTML = `
        <img src="${imagen}" alt="${nombre}">
        <div>
          <h4>${nombre}</h4>
          <p>Precio: ${precio}</p>
          <p>Cantidad: ${cantidad}</p>
          <button class="eliminar-producto" data-nombre="${nombre}">Eliminar</button>
        </div>
      `;

      listaCarrito.appendChild(productoHTML);
    });
    
    document.getElementById('carrito-cantidad').textContent = carrito.length;
    document.getElementById('total-carrito').textContent = `Total: $${formatoPrecio(calcularTotal())}`;
  }

  function calcularTotal() {
    let total = 0;

    carrito.forEach(function(producto) {
      const { precio, cantidad } = producto;
      total += precio * cantidad;
    });

    return total;
  }

  function agregarProducto(e) {
    if (e.target.classList.contains('agregar-carrito')) {
      const producto = e.target.parentElement;
      const nombre = producto.querySelector('h3').textContent;
      const precio = parseFloat(producto.querySelector('p').textContent.replace('Precio: $', ''));
      const imagen = producto.querySelector('img').getAttribute('src');

      const existe = carrito.some(function(producto) {
        return producto.nombre === nombre;
      });

      if (existe) {
        const productos = carrito.map(function(producto) {
          if (producto.nombre === nombre) {
            producto.cantidad++;
            return producto;
          } else {
            return producto;
          }
        });

        carrito = [...productos];
      } else {
        carrito.push({
          nombre,
          precio,
          cantidad: 1,
          imagen
        });
      }

      actualizarCarrito();
    }
  }

  function eliminarProducto(e) {
    if (e.target.classList.contains('eliminar-producto')) {
      const nombre = e.target.dataset.nombre;

      const productos = carrito.filter(function(producto) {
        return producto.nombre !== nombre;
      });

      carrito = [...productos];

      actualizarCarrito();
    }
  }

  function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
  }

  carritoIcon.addEventListener('click', function() {
    carritoOverlay.style.display = 'flex';
  });

  carritoOverlay.addEventListener('click', function(e) {
    if (e.target.id === 'carrito-overlay') {
      carritoOverlay.style.display = 'none';
    }
  });

  catalogo.addEventListener('click', agregarProducto);

  listaCarrito.addEventListener('click', eliminarProducto);

  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
})