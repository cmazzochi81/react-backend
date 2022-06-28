/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
import { forgotPasswordRoute } from "./forgotPasswordRoute";
import { logInRoute } from "./logInRoute";
import { signUpRoute } from "./signUpRoute";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
import { verifyEmailRoute } from "./verifyEmailRoute";
import { resetPasswordRoute } from "./resetPasswordRoute";
import { getGoogleOAuthUrlRoute } from "./getGoogleOAuthUrlRoute";
import { googleOAuthCallbackRoute } from "./googleOAuthCallbackRoute";

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
