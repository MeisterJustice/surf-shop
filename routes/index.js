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
    asyncErrorHandler
  } from '../middleware';
const router = express.Router();

router.get('/', asyncErrorHandler(getIndex));  
router.get('/register', getRegister);
router.post('/register', asyncErrorHandler(postRegister));
router.get('/login', getLogin);
router.post('/login', asyncErrorHandler(postLogin));
router.get('/logout', getLogout);
router.get('/profile', asyncErrorHandler(getProfile));
router.put('/profile/:user_id', asyncErrorHandler(updateProfile));
router.get('/forgot', asyncErrorHandler(forgotPassword));
router.put('/forgot', asyncErrorHandler(updateForgotPassword));
router.get('/reset/:token', asyncErrorHandler(GetresetPassword));
router.put('/reset/:token', asyncErrorHandler(PutresetPassword));

export default router;
