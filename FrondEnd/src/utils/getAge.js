export const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date(); // Fecha actual
    const nacimiento = new Date(fechaNacimiento); // Convertir la fecha de nacimiento a un objeto Date
  
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear(); // Calcular la diferencia de años
    const mesActual = fechaActual.getMonth();
    const mesNacimiento = nacimiento.getMonth();
  
    // Restar un año si el cumpleaños aún no ha ocurrido este año
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < nacimiento.getDate())) {
      edad--;
    }
  
    return edad;
  }