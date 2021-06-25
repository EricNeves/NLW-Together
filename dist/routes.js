"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var HomeController_1 = require("./controllers/HomeController");
var CreateUserController_1 = require("./controllers/CreateUserController");
var CreateTagController_1 = require("./controllers/CreateTagController");
var AutheticateUserController_1 = require("./controllers/AutheticateUserController");
var CreateComplimentController_1 = require("./controllers/CreateComplimentController");
var ListUserSendComplimentsController_1 = require("./controllers/ListUserSendComplimentsController");
var ListUserReceiveComplimentsController_1 = require("./controllers/ListUserReceiveComplimentsController");
var ListTagsController_1 = require("./controllers/ListTagsController");
var ListUsersController_1 = require("./controllers/ListUsersController");
var DeleteTagController_1 = require("./controllers/DeleteTagController");
var UpdateTagController_1 = require("./controllers/UpdateTagController");
var DeleteSendComplimentController_1 = require("./controllers/DeleteSendComplimentController");
var UpdadeSendComplimentByUserController_1 = require("./controllers/UpdadeSendComplimentByUserController");
var ensureAdmin_1 = require("./middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("./middlewares/ensureAuthenticated");
var router = express_1.Router();
exports.router = router;
var homeController = new HomeController_1.HomeController();
var createUserController = new CreateUserController_1.CreateUserController();
var createTagController = new CreateTagController_1.CreateTagController();
var authenticateUserController = new AutheticateUserController_1.AuthenticateUserController();
var createComplimentController = new CreateComplimentController_1.CreateComplimentController();
var listUserSendComplimentsController = new ListUserSendComplimentsController_1.ListUserSendComplimentsController();
var listUserReceiveComplimentsController = new ListUserReceiveComplimentsController_1.ListUserReceiveComplimentsController();
var listTagsController = new ListTagsController_1.ListTagsController();
var listUsersController = new ListUsersController_1.ListUsersController();
var deleteTagController = new DeleteTagController_1.DeleteTagController();
var updateTagController = new UpdateTagController_1.UpdateTagController();
var deleteSendComplimentController = new DeleteSendComplimentController_1.DeleteSendComplimentController();
var updateSendComplimentByUserController = new UpdadeSendComplimentByUserController_1.UpdateSendComplimentByUserController();
router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createTagController.handle);
router.post('/session', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticated_1.ensureAuthenticated, createComplimentController.handle);
router.get('/', homeController.handle);
router.get('/users/compliments/send', ensureAuthenticated_1.ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/users/compliments/receive', ensureAuthenticated_1.ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get('/tags', ensureAuthenticated_1.ensureAuthenticated, listTagsController.handle);
router.get('/users', ensureAuthenticated_1.ensureAuthenticated, listUsersController.handle);
router.delete('/tag', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, deleteTagController.handle);
router.delete('/compliments', ensureAuthenticated_1.ensureAuthenticated, deleteSendComplimentController.handle);
router.put('/tag', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, updateTagController.handle);
router.put('/compliment', ensureAuthenticated_1.ensureAuthenticated, updateSendComplimentByUserController.handle);
