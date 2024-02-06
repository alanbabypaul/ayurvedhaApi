import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import './DB/connection';
import routes from './Routes/routes';

dotenv.config();

const dc_Server = express();
dc_Server.use(cors());
dc_Server.use(express.json());
dc_Server.use('/api',routes);

const PORT = process.env.PORT || 3000;

dc_Server.get('/', (req, res) => {
    res.send('API Server is up');
  });
  dc_Server.get('/api', (req, res) => {
    res.send('API Server is up');
  });

dc_Server.listen(PORT, () => {
    console.log(`API server started at port ${PORT} and waiting for client request!!!`);
});


