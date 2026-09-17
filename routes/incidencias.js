import express from 'express';
import { cambiarEstado } from '../controllers/cambiarEstado.js';
import { crearIncidencia } from '../controllers/registrarIncidencias.js';
import { listarIncidencias, buscarIncidenciaPorId, clasificarIncidencia, obtenerEstadisticas } from '../controllers/consultarIncidencias.js';
import { eliminarIncidencia } from '../controllers/eliminarIncidencias.js';

const router = express.Router(); 

router.get('/incidencias', listarIncidencias);
router.get('/estadisticas', obtenerEstadisticas);
router.get('/incidencias/:id', buscarIncidenciaPorId);
router.get('/estadisticas/:id/clasificacion', clasificarIncidencia);
router.post('/incidencias', crearIncidencia); 
router.put('/incidencias/:id/estado', cambiarEstado);
router.delete('/incidencias/:id', eliminarIncidencia);

export default router;