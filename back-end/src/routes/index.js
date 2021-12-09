const forgotPasswordRoute = require('./forgotPasswordRoute');
const getGoogleOAuthUrlRoute = require('./getGoogleOAuthUrlRoute');
const logInRoute = require('./logInRoute');
const signUpRoute = require('./signUpRoute');
const testRoute = require('./testRoute');
const updateUserInfoRoute = require('./updateUserInfoRoute');
const verifyEmailRoute = require('./verifyEmailRoute');
const resetPasswordRoute = require('./resetPasswordRoute');
const googleOAuthCallbackRoute = require('./googleOAuthCallbackRoute');

export const routes = [
    testRoute,
    signUpRoute,
    logInRoute,
    updateUserInfoRoute,   
    verifyEmailRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    getGoogleOAuthUrlRoute,
    googleOAuthCallbackRoute,
];