import incidencias from "../data/incidenciasData.js";
import { validarIncidencia } from "../utils/helpers.js";

export const crearIncidencia = (req, res) => {
    const { empleado, area, descripcion, prioridad } = req.body;

    const validarDatos = validarIncidencia({empleado, area, descripcion, prioridad})

    //Verificar si los datos son validos
    if(!validarDatos) return res.status(400).json ({message: 'Los datos no son validos'});

    // Generar nuevo ID unico de manera incremental
    const nuevoId = incidencias.length > 0 ? incidencias[incidencias.length - 1].id + 1 : 1;

    // Construir la nueva incidencia con el estado por defecto "Pendiente"
    const nuevaIncidencia = {
        id: nuevoId,
        empleado: empleado.trim(),
        area: area.trim(),
        descripcion: descripcion.trim(),
        prioridad: prioridad.trim(),
        estado: "Pendiente"
        //obj
    };

    //agregar la incidencia al arreglo en la memoria o bueno el arreglo
    incidencias.push(nuevaIncidencia);

    //Retornar el mensaje de status
    return res.status(201).json({
        mensaje: "Incidencia registrada correctamente"
    });
}