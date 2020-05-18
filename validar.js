function validar(){
    
    var nombre;
    var apellidos;
    var correo;
    var usuario;
    var pass;
    var phone;
  
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    pass = document.getElementById("pass").value;
    phone = document.getElementById("phone").value;
    
    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }

    if (apellidos === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (apellidos.length>80){
        alert("El nombre es muy largo");
        return false;
    }

    if (correo === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (correo.includes('@')!==true && correo.includes('.')!==true){
        alert("Ingrese nombre correo correctamente");
        return false;
    }
    if (usuario === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (usuario.length>20){
        alert("El nombre de usuario es muy largo");
        return false;
    }
     if (phone === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (phone.length>15 && phone.typeof===number){
        alert("El número es muy largo");
        return false;
    }
  
    

      alert("Bienvenido: " + nombre + " " + apellidos + " Usuario: "+ usuario + " Password: " + pass);
}
