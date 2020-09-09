import config from "dotenv";
import express from "express";
import BookRoutes from "./server/routes/BookRoutes";
import UserRoutes from "./server/routes/UserRoutes";

config.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;

// books routes
app.use("/api/v1/books", BookRoutes);
app.use("/api/v1/users", UserRoutes);

// when a random route is inputed
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to this api!",
  })
);

app.listen(port, () => console.log(`App is listening to port: ${port}`));

export default app;
