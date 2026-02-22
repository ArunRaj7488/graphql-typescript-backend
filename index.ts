import { startServer } from "./src/server";
import { connectDB } from "./src/config/db";
import {PORT} from './src/config/env'

const bootstrap = async () => {

  await connectDB();

  const app = await startServer();

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/users`);
  });

};

bootstrap();