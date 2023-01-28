import express from 'express';
import user from '../Controller/User.js';

const router = express.Router();

router
  .post('/', user.onCreateUser)
  
  

export default router;