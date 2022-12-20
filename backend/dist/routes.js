"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrganizationController_1 = require("./controllers/OrganizationController");
const QuizController_1 = require("./controllers/QuizController");
const QuizQuestionController_1 = require("./controllers/QuizQuestionController");
const QuizResponseController_1 = require("./controllers/QuizResponseController");
const ResponseController_1 = require("./controllers/ResponseController");
const UnityController_1 = require("./controllers/UnityController");
const UserController_1 = require("./controllers/UserController");
const VehicleController_1 = require("./controllers/VehicleController");
const routes = (0, express_1.Router)();
routes.post('/organization', new OrganizationController_1.OrganizationController().create);
routes.post('/quiz', new QuizController_1.QuizController().create);
routes.post('/quizQuestion', new QuizQuestionController_1.QuizQuestionController().create);
routes.post('/quizResponse', new QuizResponseController_1.QuizResponseController().create);
routes.post('/Response', new ResponseController_1.ResponseController().create);
routes.post('/unity', new UnityController_1.UnityController().create);
routes.post('/user', new UserController_1.UserController().create);
routes.post('/vehicle', new VehicleController_1.VehicleController().create);
routes.get('/organization', new OrganizationController_1.OrganizationController().findAll);
routes.get('/quiz', new QuizController_1.QuizController().findAll);
routes.get('/quizQuestion', new QuizQuestionController_1.QuizQuestionController().findAll);
routes.get('/quizResponse', new QuizResponseController_1.QuizResponseController().findAll);
routes.get('/Response', new ResponseController_1.ResponseController().findAll);
routes.get('/unity', new UnityController_1.UnityController().findAll);
routes.get('/user', new UserController_1.UserController().findAll);
routes.get('/vehicle', new VehicleController_1.VehicleController().findAll);
routes.get('/organization/:id', new OrganizationController_1.OrganizationController().findOne);
routes.get('/quiz/:id', new QuizController_1.QuizController().findOne);
routes.get('/quizQuestion/:id', new QuizQuestionController_1.QuizQuestionController().findOne);
routes.get('/quizResponse/:id', new QuizResponseController_1.QuizResponseController().findOne);
routes.get('/Response/:id', new ResponseController_1.ResponseController().findOne);
routes.get('/unity/:id', new UnityController_1.UnityController().findOne);
routes.get('/user/:id', new UserController_1.UserController().findOne);
routes.get('/vehicle/:id', new VehicleController_1.VehicleController().findOne);
routes.put('/organization/:id', new OrganizationController_1.OrganizationController().update);
routes.put('/quiz/:id', new QuizController_1.QuizController().update);
routes.put('/quizQuestion/:id', new QuizQuestionController_1.QuizQuestionController().update);
routes.put('/quizResponse/:id', new QuizResponseController_1.QuizResponseController().update);
routes.put('/Response/:id', new ResponseController_1.ResponseController().update);
routes.put('/unity/:id', new UnityController_1.UnityController().update);
routes.put('/user/:id', new UserController_1.UserController().update);
routes.put('/vehicle/:id', new VehicleController_1.VehicleController().update);
routes.delete('/organization/:id', new OrganizationController_1.OrganizationController().delete);
routes.delete('/quiz/:id', new QuizController_1.QuizController().delete);
routes.delete('/quizQuestion/:id', new QuizQuestionController_1.QuizQuestionController().delete);
routes.delete('/quizResponse/:id', new QuizResponseController_1.QuizResponseController().delete);
routes.delete('/Response/:id', new ResponseController_1.ResponseController().delete);
routes.delete('/unity/:id', new UnityController_1.UnityController().delete);
routes.delete('/user/:id', new UserController_1.UserController().delete);
routes.delete('/vehicle/:id', new VehicleController_1.VehicleController().delete);
exports.default = routes;
