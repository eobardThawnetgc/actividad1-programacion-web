import express from 'express';
import { listarIncidencias, buscarIncidenciaPorId, clasificarIncidencia } from '../controllers/consultarIncidencias';

const router = express.Router();

//funcion solo para poner en las rutas mientras se crean los controladores
const funcionRelleno = () => {};

router.get('/incidencias', listarIncidencias);
router.get('/incidencias/:id', buscarIncidenciaPorId);
router.get('/estadisticas', funcionRelleno);
router.get('/estadisticas/:id/clasificacion', clasificarIncidencia);
router.post('/incidencias', funcionRelleno); //crear incidencia
router.put('/incidencias/:id/estado', funcionRelleno); //cambiar estado de incidencia
router.delete('/incidencias/:id', funcionRelleno);

export default router;