import incidencias from "../data/incidenciasData.js";

export const listarIncidencias = (req, res) => {
    res.json(incidencias);
}

export const buscarIncidenciaPorId = (req, res) => {
    const id = Number(req.params.id);

    const incidencia = incidencias.find(
        incidencia => incidencia.id == id
    );

    if (incidencia) return res.json(incidencia);

    return res.status(404).json({
        message: "Incidencia no encontrada"
    });
}

const clasificarPrioridad = (prioridad) => {
    let resultado;
    
    switch (prioridad) {
        case "Alta":
            resultado = "Crítica";
            break;
        case "Media":
            resultado = "Importante";
            break;
        case "Baja":
            resultado = "Normal";
            break;
    }
    return resultado;
}

export const clasificarIncidencia = (req, res) => {
    const id = Number(req.params.id);

    const incidencia = incidencias.find(
        incidencia => incidencia.id == id
    );

    if (incidencia) {
        const data = {
            id: incidencia.id,
            "Clasificación": clasificarPrioridad(incidencia.prioridad)
        };

        return res.json(data);
    }

    return res.json({
        message: "Incidencia no encontrada"
    });
}

export const obtenerEstadisticas = (req, res) => {
    const totalIncidencias = incidencias.length;
    const pendientes = incidencias.filter(i => i.estado === "Pendiente").length;
    const enProceso = incidencias.filter(i => i.estado === "En Proceso").length;
    const resueltas = incidencias.filter(i => i.estado === "Resuelta").length;
    const canceladas = incidencias.filter(i => i.estado === "Cancelada").length;

    return res.json({
        totalIncidencias,
        pendientes,
        enProceso,
        resueltas,
        canceladas
    });
};