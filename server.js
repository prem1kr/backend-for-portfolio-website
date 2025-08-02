import express from "express";
import router from "./routes/formRoutes.js";
import mongooseDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
app.use(cors({
  origin: ['https://premkumar-portfolio-site.netlify.app', 'https://portfolio-react-js-ofs4.onrender.com' , 'https://pk-portfolio-sit.netlify.app' ], 
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use("/api", router);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    mongooseDB();
});
