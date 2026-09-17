// Funcion para validar los datos de la incidencia
//Previo a registrar una incidencia
const validarIncidencia = (datos) => {
  const { empleado, area, descripcion, prioridad } = datos;

  //Primero validar que existan datos para los campos obligatorios
  if (!empleado || !area || !descripcion || !prioridad) {
    return "Todos los campos son obligatorios";
  }

  //Segundo validar que no contengan cadenas vacías o solo espacios en blanco
  if (
    empleado.trim() === "" ||
    area.trim() === "" ||
    descripcion.trim() === "" ||
    prioridad.trim() === ""
  ) {
    return "No se permiten campos vacios";
  }

  //Tercero validar la prioridad permitida
  switch (prioridad.trim()) {
    case "Alta":
    case "Media":
    case "Baja":
      break; // Prioridad valida
    default:
      return "La prioridad solo puede ser: 'Alta', 'Media' o 'Baja'";
  }

  // Retorna null si la validación es exitosa por que solo es validacion, no registro
  return null;
};

//Exportar la funcion desde el archivo para ser importada en otros archivos
module.exports = {
  validarIncidencia
};