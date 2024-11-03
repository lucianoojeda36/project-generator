import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Ruta principal del backend');
});

export default router;
