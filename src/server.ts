import express from 'express';
import router from "./router.js";

const PORT = 3000;

const app = express();

// Routing
app.use('/api', router)

// Starting Server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
})