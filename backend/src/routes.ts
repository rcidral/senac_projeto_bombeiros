import { Router } from "express";
import { OrganizationController } from "./controllers/OrganizationController";
import { QuizController } from "./controllers/QuizController";
import { QuizQuestionController } from "./controllers/QuizQuestionController";
import { QuizResponseController } from "./controllers/QuizResponseController"
import { ResponseController } from "./controllers/ResponseController"
import { UnityController } from "./controllers/UnityController"
import { UserController } from "./controllers/UserController"
import { VehicleController } from "./controllers/VehicleController"

const routes = Router();

routes.post('/organization', new OrganizationController().create);
routes.post('/quiz', new QuizController().create);
routes.post('/quizQuestion', new QuizQuestionController().create);
routes.post('/quizResponse', new QuizResponseController().create);
routes.post('/Response', new ResponseController().create);
routes.post('/unity', new UnityController().create);
routes.post('/user', new UserController().create);
routes.post('/vehicle', new VehicleController().create);

routes.get('/organization', new OrganizationController().findAll);
routes.get('/quiz', new QuizController().findAll);
routes.get('/quizQuestion', new QuizQuestionController().findAll);
routes.get('/quizResponse', new QuizResponseController().findAll);
routes.get('/Response', new ResponseController().findAll);
routes.get('/unity', new UnityController().findAll);
routes.get('/user', new UserController().findAll);
routes.get('/vehicle', new VehicleController().findAll);

routes.get('/organization/:id', new OrganizationController().findOne);
routes.get('/quiz/:id', new QuizController().findOne);
routes.get('/quizQuestion/:id', new QuizQuestionController().findOne);
routes.get('/quizResponse/:id', new QuizResponseController().findOne);
routes.get('/Response/:id', new ResponseController().findOne);
routes.get('/unity/:id', new UnityController().findOne);
routes.get('/user/:id', new UserController().findOne);
routes.get('/vehicle/:id', new VehicleController().findOne);

routes.put('/organization/:id', new OrganizationController().update);
routes.put('/quiz/:id', new QuizController().update);
routes.put('/quizQuestion/:id', new QuizQuestionController().update);
routes.put('/quizResponse/:id', new QuizResponseController().update);
routes.put('/Response/:id', new ResponseController().update);
routes.put('/unity/:id', new UnityController().update);
routes.put('/user/:id', new UserController().update);
routes.put('/vehicle/:id', new VehicleController().update);

routes.delete('/organization/:id', new OrganizationController().delete);
routes.delete('/quiz/:id', new QuizController().delete);
routes.delete('/quizQuestion/:id', new QuizQuestionController().delete);
routes.delete('/quizResponse/:id', new QuizResponseController().delete);
routes.delete('/Response/:id', new ResponseController().delete);
routes.delete('/unity/:id', new UnityController().delete);
routes.delete('/user/:id', new UserController().delete);
routes.delete('/vehicle/:id', new VehicleController().delete);

export default routes;