import mongoose from 'mongoose';
import passport from 'passport';
import User from '../models/user';

// @ Description
// @ Route
// @ Access Control
export const getIndex = async (req, res, next) => {
    res.send("Index");
}

// @ Description
// @ Route
// @ Access Control
export const getRegister = async (req, res, next) => {
    res.send("register");
}

// @ Description
// @ Route
// @ Access Control
export const postRegister = async (req, res, next) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        image: req.body.image
    });
    await User.register(newUser, req.body.password);
    res.redirect('/');
}

// @ Description
// @ Route
// @ Access Control
export const getLogin = async (req, res, next) => {
    res.send("get login");
}

// @ Description
// @ Route
// @ Access Control
export const postLogin = async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    })(req, res, next);
}

// @ Description
// @ Route
// @ Access Control
export const getLogout = async (req, res, next) => {
    req.logout();
    res.redirect('/');
}

// @ Description
// @ Route
// @ Access Control
export const getProfile = async (req, res, next) => {
    res.send("get profile");
}

// @ Description
// @ Route
// @ Access Control
export const updateProfile = async (req, res, next) => {
    res.send("update profile");
}

// @ Description
// @ Route
// @ Access Control
export const forgotPassword = async (req, res, next) => {
    res.send("forgot password");
}

// @ Description
// @ Route
// @ Access Control
export const updateForgotPassword = async (req, res, next) => {
    res.send("update forgot password");
}

// @ Description
// @ Route
// @ Access Control
export const GetresetPassword = async (req, res, next) => {
    res.send("reset password");
}

// @ Description
// @ Route
// @ Access Control
export const PutresetPassword = async (req, res, next) => {
    res.send("put reset password");
}