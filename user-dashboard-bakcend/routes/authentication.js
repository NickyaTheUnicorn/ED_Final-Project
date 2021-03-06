//#region Basic Requirements

const express = require('express');
const router = require('express').Router();

// Check is used for backend validation
const { check } = require('express-validator');

const Authenitication = require('../controllers/authentication');

//#endregion

//#region Routes

router.post('/signup', [
    check('email', 'Email is invalid').isEmail().normalizeEmail(),
    check('password', 'Password must be at least 6 characters and less than 20').isLength({min: 6, max: 20})
], Authenitication.register)

router.post('/signin', [
    check('email', 'Email is invalid').isEmail().normalizeEmail(),
    check('password', 'Password must be at least 6 characters and less than 20').isLength({min: 6, max:20})
], Authenitication.login)

//#endregion

module.exports = router;