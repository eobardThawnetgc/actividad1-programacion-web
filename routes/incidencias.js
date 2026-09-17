import express from 'express';
import { crearIncidencia } from '../controllers/registrarIncidencias.js';
import { listarIncidencias, buscarIncidenciaPorId, clasificarIncidencia, eliminarIncidencia, obtenerEstadisticas } from '../controllers/consultarIncidencias.js';

const router = express.Router(); 

//funcion solo para poner en las rutas mientras se crean los controladores
const funcionRelleno = () => {};

router.get('/incidencias', listarIncidencias);
router.get('/estadisticas', obtenerEstadisticas);
router.get('/incidencias/:id', buscarIncidenciaPorId);
router.get('/estadisticas/:id/clasificacion', clasificarIncidencia);
router.post('/incidencias', crearIncidencia); //crear incidencia
router.put('/incidencias/:id/estado', funcionRelleno); //cambiar estado de incidencia
router.delete('/incidencias/:id', eliminarIncidencia);

export default router;