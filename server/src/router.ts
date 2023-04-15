import { Router } from "express";

const router = Router();

router.post('/authenticate', async (req, res) => {
    const {username} = req.body;
    return res.json({username: username, secret: "sh256"});
})


export {router}