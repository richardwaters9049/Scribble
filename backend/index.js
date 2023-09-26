const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "cdebbcec-3111-4ded-a09e-1bd32c2d2df6" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        if (e.response) {
            // Handle the error when e.response is defined
            return res.status(e.response.status).json(e.response.data);
        } else {
            // Handle the error when e.response is undefined
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
});

app.listen(3001);
