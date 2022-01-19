let alumno = prompt("¿sos alumno del curso?").toLowerCase();
if (alumno == "si"){
    while (alumno == "si") {
    let apellido = prompt("Ingrese su apellido").toLowerCase()
        switch (apellido) {
            case "gomez": alert("Felicitaciones, estas aprobado. Tu nota es 8");
            break;
            case "alvarez": alert("Felicitaciones, estas aprobado. Tu nota es 7");
            break;
            case "perez": alert("Felicitaciones, estas aprobado. Tu nota es 6");
            break;
            case "fernandez": alert("Lamentablemente estas desaprobado. Tu nota es 3");
            break;
            case "sanchez": alert("Felicitaciones, estas aprobado. Tu nota es 8");
            break;
            case "zapata": alert("Lamentablemente estas desaprobado. Tu nota es 2");
            break;
            default: alert("No te tenemos registrado como alumno");
        }
}
} 
else {alert("No tiene permiso para ingresar a la web")}




    // else if (apellido == ""){
    //     alert("No ingreso ningun apellido")
    // }





