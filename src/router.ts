import {Router} from "express";
import {userContoller} from "./controllers/user.js";

const router = Router();

router.get('/register', userContoller.allUsers)
router.get('/login', userContoller.allUsers)
router.get('/users', userContoller.allUsers)




export default router;