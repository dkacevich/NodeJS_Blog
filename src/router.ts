import {Router} from "express";

const router = Router();

router.get('/', (req, res) => {
    console.log("working");
})


export default router;