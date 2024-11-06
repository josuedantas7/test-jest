import app from "./app.js";
import { createConnection } from "./database.js";

createConnection();
app.listen(3002, () => {
  console.log("Servidor rodando em http://localhost:3002");
});
