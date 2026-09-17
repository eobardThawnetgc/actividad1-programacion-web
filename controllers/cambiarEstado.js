import incidencias from "../data/incidenciasData.js";
import { validarEstado } from "../utils/helpers.js";

export const cambiarEstado = (req, res) => {
  const id = Number(req.params.id);
  const { estado } = req.body;

  //Validar el estado
  const validarDatos = validarEstado(estado);
  if (!validarDatos) return res.status(400).json({ message: 'Los datos son invalidos' });

  //Buscar la incidencia por ID
  const incidencia = incidencias.findIndex((incidencia) => incidencia.id === id);
  if (incidencia === -1) { return res.status(404).json({ message: "Incidencia no encontrada" }); }

  //Actualizar el estado
  incidencias[incidencia].estado = estado.trim();

  //Retornar la incidencia actualizada con el nuevo estado
  return res.json({ message: "Estado de la incidencia actualizado correctamente", incidencia:incidencias[incidencia]});
};