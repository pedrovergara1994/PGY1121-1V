let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

class Usuario {
    constructor(email, rut, fechaNacimiento, nombreCompleto, password) {
      this.username = email.split('@')[0];
      this.email = email;
      this.rut = rut;
      this.fechaIngreso = new Date();
      this.fechaNacimiento = fechaNacimiento;
      this.nombreCompleto = nombreCompleto;
      this.password = password;
    }
}

const userLogin = new Usuario('pedro@gmail.com','18842077-k', '07-08-1994', 'Pedro Vergara Gonzalez', '1234');

//let user1 = new Usuario('pedro.vergara@Gmail.com', '18842077-k');

const listaUsuarios = [
    userLogin
]

const obtenerUsuario = () => {
    return JSON.parse(localStorage.getItem('user'));
}

const user = obtenerUsuario();

const existe = user !== null && user !== undefined ? true : false;

if (existe) {
    window.location.href= '../../index.html'
}

const registrarSesion = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user));
}


const registrarUsuario = () => {
    const form = document.querySelector("form")
    emailField = form.querySelector(".email");
    emailInput = emailField.querySelector("input");
    nombreField = form.querySelector(".nombre");
    nombreInput = nombreField.querySelector("input");
    rutField = form.querySelector(".rut");
    rutInput = rutField.querySelector("input");
    fechanField = form.querySelector(".fechan");
    fechanInput = fechanField.querySelector("input");
    passowrdField = form.querySelector(".password");
    passwordInput = passowrdField.querySelector("input");
    passowrd2Field = form.querySelector(".password2");
    password2Input = passowrd2Field.querySelector("input");


    form.onsubmit = (e)=>{
        e.preventDefault();
        let valido = true;
        if(!emailInput.value.match(pattern)){
            console.log('email invalido')
            emailField.classList.remove("error");

            let errorTxt = emailField.querySelector(".error-txt");
            (emailInput.value != "") ? errorTxt.innerText = "Ingresa un email valido" : errorTxt.innerText = "Email no puede estar vacio";
            valido = false;
        }


        if (passwordInput.value === "") {
            valido = false;
        }


        if (passwordInput.value !== password2Input.value) {
            let errorTxt = passowrd2Field.querySelector(".error-txt");
            (password2Input.value != "") ? errorTxt.innerText = "El password reingresado no coincide" : errorTxt.innerText = "Password no puede estar vacio";
            valido = false;
        }
        


        if (valido) {
            const newUser = new Usuario(emailInput.value, rutInput.value, fechanInput.value, nombreInput.value, passwordInput.value)
            listaUsuarios.push(newUser);
        
            listaUsuarios.forEach(element => {
                console.log(element)
            });

            window.localStorage.setItem('usuarios', JSON.stringify(listaUsuarios))
        } else {
            console.log('no es valido para registrar')
         }

        
    };


    

}



const cleanStore = () => {
    localStorage.removeItem('user');
}




const login = () => {
    const form = document.querySelector("form")
    eField = form.querySelector(".email");
    eInput = eField.querySelector("input");
    pField = form.querySelector(".password");
    pInput = pField.querySelector("input");
    
    
    form.onsubmit = (e)=>{
      e.preventDefault(); //preventing from form submitting
      //if email and password is blank then add shake class in it else call specified function
      (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
      (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
    
    
      setTimeout(()=>{ //remove shake class after 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
      }, 500);
  
  
      eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
      pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup
  
  
      function checkEmail(){ //checkEmail function
         //pattern for validate email
        if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
          eField.classList.add("error");
          eField.classList.remove("valid");
          let errorTxt = eField.querySelector(".error-txt");
          //if email value is not empty then show please enter valid email else show Email can't be blank
          (eInput.value != "") ? errorTxt.innerText = "Ingresa un email valido" : errorTxt.innerText = "Email no puede estar vacio";
        }else{ //if pattern matched then remove error and add valid class
          eField.classList.remove("error");
          eField.classList.add("valid");
        }
      }
  
  
      function checkPass(){ //checkPass function
        if(pInput.value == ""){ //if pass is empty then add error and remove valid class
          pField.classList.add("error");
          pField.classList.remove("valid");
        }else{ //if pass is empty then remove error and add valid class
          pField.classList.remove("error");
          pField.classList.add("valid");
        }
      }
  
  
      if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        if (userLogin.email === eInput.value && userLogin.password === pInput.value) {
            console.log('login correcto')    
            const user = new Usuario(eInput.value, '', '', '', '');
            registrarSesion(user);
            window.location.href="../../index.html"
        } else {
            let usuarios = JSON.parse(localStorage.getItem('usuarios'));
            console.log(usuarios)
            usuarios.forEach(element => {
                if (element.email === eInput.value && element.password === pInput.value) {
                    const user = new Usuario(eInput.value, '', '', '', '');
                    registrarSesion(user);
                    window.location.href="../../index.html"
                }
            });

            console.log('login incorrecto')
        }
        
        

      }
    };
}