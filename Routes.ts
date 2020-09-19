import Express from 'express';
import videoController from './src/controllers/videodownloadController';

const routes = Express.Router();

routes.post('/video/convert/', videoController.convertSound);
routes.get('/audio/download/', videoController.downloadSound);

export default routes;