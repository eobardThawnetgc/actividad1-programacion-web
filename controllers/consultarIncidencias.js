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
            clasificacion: clasificarPrioridad(incidencia.prioridad)
        };

        return res.json(data);
    }

    return res.status(404).json({
        message: "Incidencia no encontrada"
    });
}

export const obtenerEstadisticas = (req, res) => {
    const estadisticas = incidencias.reduce((resultado, incidencia) => {
        switch (incidencia.estado) {
            case "Pendiente":
                resultado.pendientes++;
                break;

            case "En Proceso":
                resultado.enProceso++;
                break;

            case "Resuelta":
                resultado.resueltas++;
                break;

            case "Cancelada":
                resultado.canceladas++;
                break;
        }
        return resultado;

    }, {
        pendientes: 0,
        enProceso: 0,
        resueltas: 0,
        canceladas: 0
    });

    return res.json({
        totalIncidencias: incidencias.length,
        ...estadisticas
    });
};