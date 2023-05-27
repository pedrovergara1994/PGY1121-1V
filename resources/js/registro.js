document.getElementById('registro-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const pais = document.getElementById('pais').value;
    const terminos = document.getElementById('terminos').checked;
  
  
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const terminosError = document.getElementById('terminos-error');
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    terminosError.textContent = '';
  
    
    if (!isValidEmail(email)) {
      emailError.textContent = 'Email inválido';
      return;
    }
  
    
    if (password.length < 8) {
      passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres';
      return;
    }
  
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Las contraseñas no coinciden';
      return;
    }
  
    if (pais === '') {
      alert('Por favor, selecciona un país');
      return;
    }
  
    
    if (!terminos) {
      terminosError.textContent = 'Debes aceptar los términos y condiciones';
      return;
    }
  
   
    alert('Registro exitoso');
  
    
    document.getElementById('registro-form').reset();
  });
  
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
 