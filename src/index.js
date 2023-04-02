import express from "express";
import cors from "cors";
import mongoose from "mongoose";


const app = express();

app.use(express.json());
app.use(cors());

// app.use("/auth", userRouter);
// app.use("/recipes", recipesRouter);

mongoose.connect(
    "mongodb+srv://recipes:Joaquim2022@recipe.lstwtpt.mongodb.net/recipes?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.listen(3001, () => console.log("Server started"));