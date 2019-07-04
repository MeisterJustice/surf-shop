import mongoose from 'mongoose';


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
    res.send("post register");
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
    res.send("post login");
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