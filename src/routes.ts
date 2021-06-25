import { Router } from "express"

import { HomeController } from './controllers/HomeController'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { AuthenticateUserController } from './controllers/AutheticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'

import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

import { UpdateTagController } from './controllers/UpdateTagController'
import { UpdateSendComplimentByUserController } from './controllers/UpdadeSendComplimentByUserController'

import { DeleteTagController } from './controllers/DeleteTagController'
import { DeleteSendComplimentController } from './controllers/DeleteSendComplimentController'


import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

const homeController = new HomeController()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

const deleteTagController = new DeleteTagController()
const deleteSendComplimentController = new DeleteSendComplimentController()

const updateTagController = new UpdateTagController()
const updateSendComplimentByUserController = new UpdateSendComplimentByUserController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post('/session', authenticateUserController.handle)
router.post('/compliment', ensureAuthenticated, createComplimentController.handle)

router.get('/', homeController.handle)
router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle)
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUsersController.handle)

router.delete('/tag', ensureAuthenticated, ensureAdmin, deleteTagController.handle)
router.delete('/compliment', ensureAuthenticated, deleteSendComplimentController.handle)

router.put('/tag', ensureAuthenticated, ensureAdmin, updateTagController.handle)
router.put('/compliment', ensureAuthenticated, updateSendComplimentByUserController.handle)

export { router }