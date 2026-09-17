import incidencias from "../data/incidenciasData.js";

export const eliminarIncidencia = (req, res) => {
    const id = Number(req.params.id);

    // Buscamos el índice (posición) de la incidencia
    const index = incidencias.findIndex(
        incidencia => incidencia.id === id
    );

    // Si no la encuentra (-1), respondemos que no existe
    if (index === -1) {
        return res.json({
            message: "Incidencia no encontrada"
        });
    }

    // Si la encuentra, la borramos del arreglo
    incidencias.splice(index, 1);

    return res.json({
        message: "Incidencia eliminada correctamente"
    });
};