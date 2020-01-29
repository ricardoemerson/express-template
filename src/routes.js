import { Router } from 'express';

import HomeController from './app/controllers/HomeController';

const routes = new Router();

// Routes without authentication.
routes.get('/hello', HomeController.index);

export default routes;
