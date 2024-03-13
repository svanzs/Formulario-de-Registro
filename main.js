
//primero declaramos las variables q vamos a utilizar
let formulario = document.getElementById("formulario"),//accedemos al formulario por id
    //ahora usando el id de formulario lo usamos para acceder por el nombre a sus elementos
     nombre = formulario.nombre,
     correo=formulario.correo,
     sexo=formulario.sexo,
     terminos=formulario.terminos,
     error=document.getElementById("error");

     //vamos a comprobar el boton de registrarse
     //funcion de validar nombre

     function validarNombre(e){
        if(nombre.value==""||nombre.value==null){
            console.log("Por favor completa el nombre");
            //hacemos visible la lista error
            error.style.display="block";
            //ingresamos al contenido que tenga en html con innerhtml,
            //igual al contenido que ya tiene mas el elemento de la lista li, 
            //para q se muestre cada error segun sea  el caso
            error.innerHTML=error.innerHTML+"<li>Por favor agrega el nombre</li>";
            e.preventDefault();
            
        }else{
            error.style.display="none";
        }
     }

     //funcion para validar correo

     function validarCorreo(e){
        if(correo.value==""|| correo.value==null){
            console.log("Por favor introduce el correo");
            error.style.display="block";
            error.innerHTML=error.innerHTML+"<li>Por favor introduce el correo adecuado</li>";
            e.preventDefault();
        } else{
            error.style.display="none";
        }

     }

     //funcion validar sexo
     function validarSexo(e){
        if(sexo.value==""||sexo.value==null){
            console.log("Por favor selecciona el sexo");
            error.style.display="block";
            error.innerHTML=error.innerHTML+"<li>Por favor selecciona el sexo</li>";
            e.preventDefault();
        } else {
            error.style.display="none";
        }
     }
     //funcion de validar terminos
     function validarTerminos(e){
        if(terminos.checked==false){
            console.log("Por favor selecciona los terminos");
            error.style.display="block";
            error.innerHTML=error.innerHTML+"<li>Por favor selecciona los terminos</li>";
            e.preventDefault();
        } else {
            error.style.display="none";
        }
     }


     //funcion que invoca a todas las demas

     function validarFormulario(e){
         error.innerHTML=" ";//para que no se repita el mensaje de error  al dar clic en el boton registrarse
        
         validarNombre(e);
         validarCorreo(e);
         validarSexo(e);
         validarTerminos(e);
            
     }

     

    
     //evento, un solo evento para llamar a todas las funciones

formulario.addEventListener("submit", validarFormulario);