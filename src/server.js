import 'dotenv/config';
import express from 'express';
import { add, subtract, multiply, getAppInfo } from './math.js';

const app  = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', ...getAppInfo() });
});

app.get('/add/:a/:b', (req, res) => {
  const result = add(Number(req.params.a), Number(req.params.b));
  res.json({ result });
});

app.get('/subtract/:a/:b', (req, res) => {
  const result = subtract(Number(req.params.a), Number(req.params.b));
  res.json({ result });
});

app.get('/multiply/:a/:b', (req, res) => {
  const result = multiply(Number(req.params.a), Number(req.params.b));
  res.json({ result });
});

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} running on port ${port}`);
});

export default app;