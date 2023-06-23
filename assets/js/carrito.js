// Variable para almacenar los productos agregados al carrito
var carrito = [];
function agregarAlCarrito(nombre, precio) {
    // Verificar si el carrito ya existe en el localStorage
    let carrito = localStorage.getItem('carrito');
    if (!carrito) {
      carrito = [];
    } else {
      carrito = JSON.parse(carrito);
    }
  
    // Verificar si el elemento ya está en el carrito
    let encontrado = false;
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre === nombre) {
        carrito[i].cantidad++;
        encontrado = true;
        break;
      }
    }
  
    // Si el elemento no está en el carrito, agregarlo con cantidad 1
    if (!encontrado) {
      carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
    }
  
    // Actualizar el carrito en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  
  // Función para mostrar los elementos del carrito y el total de los productos
  function mostrarCarrito() {
    let carrito = localStorage.getItem('carrito');
    if (carrito) {
      carrito = JSON.parse(carrito);
      let container = document.querySelector('.containerCarrito');
      container.innerHTML = '';
  
      let total = 0;
  
      for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
  
        // Crear una tarjeta para mostrar el producto
        let cardItem = document.createElement('div');
        cardItem.classList.add('card');
        cardItem.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">Cantidad: ${item.cantidad}</p>
            <p class="card-text">Precio: $${item.precio}</p>
            <button class="btn btn-danger" onclick="eliminarDelCarrito(${i})">Eliminar</button>
          </div>
        `;
        container.appendChild(cardItem);
  
        total += item.precio * item.cantidad;
      }
  
      // Mostrar el total de los productos
      let divTotal = document.createElement('h2');
      divTotal.classList.add('totalCuenta');
      divTotal.textContent = 'Total: $' + total;
      container.appendChild(divTotal);
    }
  }
  
  function eliminarDelCarrito(index) {
    let carrito = localStorage.getItem('carrito');
    if (carrito) {
      carrito = JSON.parse(carrito);
  
      // Eliminar el producto del carrito en la posición dada por el índice
      carrito.splice(index, 1);
  
      // Actualizar el carrito en el localStorage
      localStorage.setItem('carrito', JSON.stringify(carrito));
  
      // Volver a mostrar el carrito actualizado
      mostrarCarrito();
    }
  }