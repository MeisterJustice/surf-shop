import express from 'express';
import { 
  getIndex ,
  getRegister, 
  postRegister,
  getLogin,
  postLogin,
  getLogout,
  getProfile,
  updateProfile,
  forgotPassword,
  updateForgotPassword,
  GetresetPassword,
  PutresetPassword
  } from '../controllers';
  import {
    errorHandler
  } from '../middleware';
const router = express.Router();

router.get('/', errorHandler(getIndex));  
router.get('/register', errorHandler(getRegister));
router.post('/register', errorHandler(postRegister));
router.get('/login', errorHandler(getLogin));
router.post('/login', errorHandler(postLogin));
router.get('/logout', getLogout);
router.get('/profile', errorHandler(getProfile));
router.put('/profile/:user_id', errorHandler(updateProfile));
router.get('/forgot', errorHandler(forgotPassword));
router.put('/forgot', errorHandler(updateForgotPassword));
router.get('/reset/:token', errorHandler(GetresetPassword));
router.put('/reset/:token', errorHandler(PutresetPassword));

export default router;
