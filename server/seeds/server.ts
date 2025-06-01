import express, { Express } from 'express';
import path from 'path';
import db from './config/connection';
import routes from '../routes/index';

const app: Express = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the client's dist folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// API Routes
app.use(routes);

// Fallback: serve index.html for SPA support (optional but useful)
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start server when DB is connected
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Server listening at http://localhost:${PORT}`);
  });
});
