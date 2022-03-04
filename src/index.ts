import express from "express";

import { router as GenerateRoute } from "./generate";
import { PORT } from "./constant";

export const app = express();
app.use(express.json());

const main = async () => {
  try {
    app.use("/api/generate", GenerateRoute);

    app.listen(PORT, () => {
      console.log(
        `🚀 Server is ready at http://localhost:${PORT}/api/generate`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

main();
