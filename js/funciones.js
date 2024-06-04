var clientes = []
clientes.push(new Cliente("21.695.736-9","MARCELO","PINTO","98767853","mpinto@GAMAIL.COM", 
                                            "SAN FERNANDO", "MASCULINO", "123456.."))
clientes.push(new Cliente("22.222.222-2", "SOFIA", "ROJAS", "879895746", 
                                            "srojas@GMAIL.COM","SAN VICENTE", "FEMENINO", "654321.."))

function listarClientes(){
    var filas = "";
    for (let i = 0; i < clientes.length; i++) {
        var c = clientes[i];
        filas = filas + "<tr>";
            filas = filas + "<td>"+c.rut.toUpperCase()+"</td>";
            filas = filas + "<td>"+c.nombre.toUpperCase()+"</td>";
            filas = filas + "<td>"+c.apellido.toUpperCase()+"</td>";
            filas = filas + "<td>"+c.modelo.toUpperCase()+"</td>";
            filas = filas + "<td>"+c.correo.toUpperCase()+"</td>";
            filas = filas + "<td>"+c.comuna.toUpperCase()+"</td>";
            filas = filas + "<td>"+c.sexo.toUpperCase()+"</td>";
            filas = filas + "<td>*************</td>";
        filas = filas + "</tr>";
    }
    document.getElementById("tabladedatos").innerHTML = filas;
}

document.addEventListener("DOMContentLoaded", function(){ listarClientes() });

function limpiarCampos(x){
    if(x===1){
        document.getElementById("txtrut").value = "";
    }
    document.getElementById("txtnom").value = "";
    document.getElementById("txtape").value = "";
    document.getElementById("txtmod").value = "";
    document.getElementById("cbocom").value = "";
    document.getElementById("opsexm").checked = true;
    document.getElementById("txtpas").value = "";
    document.getElementById("txtrep").value = "";
}

function consultar(){
    var rut = document.getElementById("txtrut").value;
    if(rut.trim().length<11 || rut.trim().length>12){
        alert("Debe digitar un rut para buscar!");
        document.getElementById("txtrut").value = "";
        document.getElementById("txtrut").focus();
    }else{
        let sw = 0;
        for (let i = 0; i < clientes.length; i++) {
            var c = clientes[i];
            if(rut === c.rut){
                sw = 1;
                document.getElementById("txtnom").value = c.nombre;
                document.getElementById("txtape").value = c.apellido;
                document.getElementById("txtmod").value = c.modelo;
                document.getElementById("txtcor").value = c.correo;
                document.getElementById("cbocom").value = c.comuna;
                if(e.sexo === "MASCULINO"){
                    document.getElementById("opsexm").checked = true;
                }else{
                    document.getElementById("opsexf").checked = true;
                }
                document.getElementById("txtpas").value = c.password;
                document.getElementById("txtrep").value = c.password;
            }   
        }
        var msg = "";
        if(sw === 0){
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Cliente no encontrado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }else if(sw === 1){
            msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Cliente encontrado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
    }
}

function registrar(){
    var rut = document.getElementById("txtrut").value.toUpperCase();
    var nom = document.getElementById("txtnom").value.toUpperCase();
    var ape = document.getElementById("txtape").value.toUpperCase();
    var tel = document.getElementById("txttel").value.toUpperCase();
    var cor = document.getElementById("txtcor").value.toUpperCase();
    var com = document.getElementById("cbocom").value.toUpperCase();

    var sex = "";
    if(document.getElementById("opsexm").checked === true){
        sex = "MASCULINO";
    }else{
        sex = "FEMENINO";
    }

    var pas1 = document.getElementById("txtpas").value.toUpperCase();
    var pas2 = document.getElementById("txtrep").value.toUpperCase();

    var errores = "";
    if(rut.trim().length<11 || rut.trim().length>12){
        errores = errores + "El rut debe contener entre 11 y 12 caracteres! \n";
    }else{
        for (let i = 0; i < estudiantes.length; i++) {
            var e = estudiantes[i];
            if(rut === e.rut){
                errores = errores + "El rut ya se encuentra registrado!\n";
                break;
            }
        }
    }

    if(nom.trim().length<5 || nom.trim().length>30){
        errores = errores + "El nombre debe contener entre 5 y 40 caracteres! \n";
    }

    if(ape.trim().length<5 || ape.trim().length>30){
        errores = errores + "El apellido debe contener entre 5 y 40 caracteres! \n";
    }

    if(tel.trim().length !== 11){
        errores = errores + "El telefono debe contener 11 digitos!";
    }

    if(cor.trim().length === 0){
        errores = errores + "Debe ingresar el email! \n";
    }else if(!cor.endsWith("@GMAIL.COM")){
        errores = errores + "El email debe ser de GMAIL.COM";
    }

    if(com.trim().length === 0){
        errores = errores + "Debe ingresar la comuna! \n";
    }

    if(pas1.trim().length === 0){
        errores = errores + "Debe ingresar el password1! \n";
    }else if(pas1.trim().length<8 || pas1.trim.length>20){
        errores = errores + "el password debe contener entre 8 y 22 caracteres! \n";
    }

    if(pas2.trim().length === 0){
        errores = errores + "Debe ingresar el password2! \n";
    }else if(pas2.trim().length<8 || pas2.trim.length>20){
        errores = errores + "el password debe contener entre 8 y 22 caracteres! \n";
    }

    if(pas1 !== pas2){
        errores = errores + "las contraseñas no coinciden \n";
    }

    if(errores !== ""){
        alert(errores)
    }else{
        var c = new Cliente(rut, nom, ape, mod, cor, com, sex, pas1);
        clientes.push(c);

        var msg = "";
        msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
        msg = msg + "<strong>Cliente registrado correctamente!</strong>"
        msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
        msg = msg + "</div>"
        document.getElementById("mensajes").innerHTML = msg;
        listarClientes();
        limpiarCampos();
    }
}

function modificar(){
    var rut = document.getElementById("txtrut").value.toUpperCase();
    var nom = document.getElementById("txtnom").value.toUpperCase();
    var ape = document.getElementById("txtape").value.toUpperCase();
    var mod = document.getElementById("txtmod").value.toUpperCase();
    var ema = document.getElementById("txtema").value.toUpperCase();
    var com = document.getElementById("cbocom").value.toUpperCase();

    var sex = "";
    if(document.getElementById("opsexm").checked === true){
        sex = "MASCULINO";
    }else{
        sex = "FEMENINO";
    }

    var pas1 = document.getElementById("txtpas").value.toUpperCase();
    var pas2 = document.getElementById("txtrep").value.toUpperCase();

    var errores = "";
    if(rut.trim().length<11 || rut.trim().length>12){
        errores = errores + "El rut debe contener entre 11 y 12 caracteres! \n";
    }else{
        let x = 0;
        for (let i = 0; i < clientes.length; i++) {
            var c = clientes[i];
            if(rut === c.rut){
                x = 1;
                break;
            }
        }
        if(x === 0){
            errores = errores + "El rut no se encuentra registrado!\n";
        }
    }

    if(nom.trim().length<5 || nom.trim().length>30){
        errores = errores + "El nombre debe contener entre 5 y 30 caracteres! \n";
    }

    if(ape.trim().length<5 || ape.trim().length>30){
        errores = errores + "El apellido debe contener entre 5 y 30 caracteres! \n";
    }

    if(mod.trim().length !== 11){
        errores = errores + "El modelo debe contener 11 digitos!";
    }

    if(cor.trim().length === 0){
        errores = errores + "Debe ingresar el email! \n";
    }else if(!cor.endsWith("@GMAIL.COM")){
        errores = errores + "El correo debe ser de GMAIL.COM";
    }

    if(com.trim().length === 0){
        errores = errores + "Debe ingresar la comuna! \n";
    }

    if(pas1.trim().length === 0){
        errores = errores + "Debe ingresar el password1! \n";
    }else if(pas1.trim().length<8 || pas1.trim.length>20){
        errores = errores + "el password debe contener entre 8 y 20 caracteres! \n";
    }

    if(pas2.trim().length === 0){
        errores = errores + "Debe ingresar el password2! \n";
    }else if(pas2.trim().length<8 || pas2.trim.length>20){
        errores = errores + "el password debe contener entre 8 y 20 caracteres! \n";
    }

    if(pas1 !== pas2){
        errores = errores + "las contraseñas no coinciden \n";
    }

    if(errores !== ""){
        alert(errores)
    }else{
        var sw = 0;
        for (let i = 0; i < clientes.length; i++) {
            var c = clientes[i];
            if(rut === c.rut){
                var x = confirm("Desea modificar el registro?");
                if(x === true){
                    sw=1;
                    estudiantes[i].nombre = nom;
                    estudiantes[i].apellido = ape;
                    estudiantes[i].modelo = mod;
                    estudiantes[i].correo = cor;
                    estudiantes[i].comuna = com;
                    estudiantes[i].sexo = sex;
                    estudiantes[i].password = pas1;
                    break;
                }else{
                    sw = 2;
                }
            }
        }

        var msg = "";
        if(sw === 0){
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>cliente no encontrado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }else if(sw === 1){
            msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>cliente modificado correctamente!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }else if(sw === 2){
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>El cliente no fue modificado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarClientes();
        limpiarCampos();
    }
}

function eliminar(){
    var rut = document.getElementById("txtrut").value.toUpperCase();

    var errores = "";
    if(rut.trim().length<11 || rut.trim().length>12){
        errores = errores + "El rut debe contener entre 11 y 12 caracteres! \n";
    }else{
        let x = 0;
        for (let i = 0; i < clientes.length; i++) {
            var c = clientes[i];
            if(rut === c.rut){
                x = 1;
                break;
            }
        }
        if(x === 0){
            errores = errores + "El rut no se encuentra registrado!\n";
        }
    }

    
    if(errores !== ""){
        alert(errores)
    }else{
        var sw = 0;
        for (let i = 0; i < clientes.length; i++) {
            var c = clientes[i];
            if(rut === c.rut){
                var x = confirm("Desea eliminar el registro?");
                if(x === true){
                    sw=1;
                    clientes.splice(i, 1)
                    break;
                }else{
                    sw = 2;
                }
            }
        }

        var msg = "";
        if(sw === 0){
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Cliente no encontrado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }else if(sw === 1){
            msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Cliente eliminado correctamente!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }else if(sw === 2){
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>El Cliente no fue eliminado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarClientes();
        limpiarCampos();
    }
}





// -----------------------------------------------
// --- FUNCIONES PARA VALIDAR EL CAMPO DEL RUT --- 
// -----------------------------------------------

// Capturando el DIV alerta y mensaje
var alerta = document.getElementById("alerta");
var mensaje = document.getElementById("mensaje");

// Permitir sólo números en el imput
function isNumber(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode === 75) return false;
  return true;
}


function checkRut(rut) {
  // Obtiene el valor ingresado quitando puntos y guión.
  var valor = clean(rut.value);

  // Divide el valor ingresado en dígito verificador y resto del RUT.
  cuerpo = valor.slice(0, -1);
  dv = valor.slice(-1).toUpperCase();

  // Separa con un Guión el cuerpo del dígito verificador.
  rut.value = format(rut.value);

  // Calcular Dígito Verificador "Método del Módulo 11"
  suma = 0;
  multiplo = 2;

  // Para cada dígito del Cuerpo
  for (i = 1; i <= cuerpo.length; i++) {
    // Obtener su Producto con el Múltiplo Correspondiente
    index = multiplo * valor.charAt(cuerpo.length - i);

    // Sumar al Contador General
    suma = suma + index;

    // Consolidar Múltiplo dentro del rango [2,7]
    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }

  // Calcular Dígito Verificador en base al Módulo 11
  dvEsperado = 11 - (suma % 11);

  // Casos Especiales (0 y K)
  dv = dv == "K" ? 10 : dv;
  dv = dv == 0 ? 11 : dv;

}


function format (rut) {
  rut = clean(rut)

  var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
  for (var i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result
  }

  return result
}


function clean (rut) {
  return typeof rut === 'string'
    ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
    : ''
}
