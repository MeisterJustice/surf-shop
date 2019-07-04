import express from 'express';
import { 
  getIndex ,
  getRegister, 
  postRegister,
  getLogin,
  postLogin,
  getProfile,
  updateProfile,
  forgotPassword,
  updateForgotPassword,
  GetresetPassword,
  PutresetPassword
  } from '../controllers';
const router = express.Router();

router.get('/', getIndex);  
router.get('/register', getRegister);
router.post('/register', postRegister);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/profile', getProfile);
router.put('/profile/:user_id', updateProfile);
router.get('/forgot', forgotPassword);
router.put('/forgot', updateForgotPassword);
router.get('/reset/:token', GetresetPassword);
router.put('/reset/:token', PutresetPassword);

export default router;
