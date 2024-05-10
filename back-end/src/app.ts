import express from "express";
import bodyParser from "body-parser";
import connectDB from "./db";
import userRoutes from "./routes/user.routes";
import roleRoutes from "./routes/role.routes";
import authRoutes from "./routes/auth.routes";
import dotenv from "dotenv";
import postRoutes from "./routes/post.routes";
import commentRoutes from "./routes/comment.routes";
import likeRoutes from "./routes/like.routes";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/roles", roleRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/likes", likeRoutes);

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://127.0.0.1:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
