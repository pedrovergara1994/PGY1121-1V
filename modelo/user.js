class Usuario {
    constructor(email, rut) {
      this.username = email.split('@')[0];
      this.email = email;
      this.rut = rut;
      this.fechaIngreso = new Date();
    }
}



const user = new Usuario('javier6alexander@Gmail.com', '17569110-3');

console.log(JSON.parse(user))