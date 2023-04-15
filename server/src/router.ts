import { Router } from "express";
import axios from "axios";
const router = Router();

router.post('/authenticate', async (req, res) => {
    const {username} = req.body;
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret:username, first_name: username},
            { headers: { "Private-Key": process.env.PRIVATEKEY } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
    return res.json({username: username, secret: "sh256"});
})


export {router}