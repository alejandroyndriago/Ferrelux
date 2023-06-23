// Inicializar una variable que reciba datos del DOM
const signupForm = document.querySelector('#FormContacto');

// Inicializaremos un evento para que nos envíe los datos con el botón
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Referenciar los datos
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const barrio = document.querySelector('#barrio').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

  // Trae los datos almacenados del arreglo que se nombra (users)
  // Nos convierte los datos en JSON en el localstorage
  const Users = JSON.parse(localStorage.getItem('users')) || [];

  // La función find() nos ayuda a buscar los datos almacenados
  // Nos comprueba si el correo que se ingresa es igual al que está guardado en el localstorage
  const isUserRegistered = Users.find((user) => user.email === email);

  // Agregaremos los datos al objeto
  Users.push({ name: name, email: email, phone: phone, barrio: barrio, subject: subject, message: message });
  localStorage.setItem('users', JSON.stringify(Users));

  alert('Registro Exitoso');
});