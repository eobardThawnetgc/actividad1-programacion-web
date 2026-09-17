// Funcion para validar los datos de la incidencia
//Previo a registrar una incidencia
const validarIncidencia = (datos) => {
  const { empleado, area, descripcion, prioridad } = datos;

  //Primero validar que existan datos para los campos obligatorios
  if (!empleado || !area || !descripcion || !prioridad) {
    console.log("Todos los campos son obligatorios");
    return false;
  }

  //Segundo validar que no contengan cadenas vacías o solo espacios en blanco
  if (
    empleado.trim() === "" ||
    area.trim() === "" ||
    descripcion.trim() === "" ||
    prioridad.trim() === ""
  ) {
    console.log("No se permiten campos vacios");
    return false;
  }

  //Tercero validar la prioridad permitida
  switch (prioridad.trim()) {
    case "Alta":
    break;
    case "Media":
    break;
    case "Baja":
    break;
    default:
      console.log("La prioridad solo puede ser: 'Alta', 'Media' o 'Baja'");
      return false;
  }

  // Retorna true si la validación es exitosa por que solo es validacion, no registro
  return true;
};

 export default validarIncidencia;