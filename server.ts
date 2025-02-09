import { config } from "./src/common/config";
import app from "./src/index";
const PORT = config.port || 5500;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
