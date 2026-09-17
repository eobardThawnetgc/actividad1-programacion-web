import incidencias from "../data/incidenciasData.js";

export const listarIncidencias = (res) => {
    res.json(incidencias);
}

export const buscarIncidenciaPorId = (req, res) => {
    const id = Number(req.params.id);

    const incidencia = incidencias.find(
        incidencia => incidencia.id == id
    );

    if (incidencia) return res.json(incidencia);

    return res.json({
        message: "Incidencia no encontrada"
    });
}

const clasificarPrioridad = (prioridad) => {
    switch (prioridad) {
        case "Alta":
            return "Crítica";

        case "Media":
            return "Importante";

        case "Baja":
            return "Normal";
    }
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