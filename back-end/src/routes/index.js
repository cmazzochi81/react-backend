import { forgotPasswordRoute } from './forgotPasswordRoute';
import { getGoogleOAuthUrlRoute } from './getGoogleOAuthUrlRoute';
import { logInRoute } from './logInRoute';
import { signUpRoute} from './signUpRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { googleOAuthCallbackRoute } from './googleOAuthCallbackRoute';

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