/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable keyword-spacing */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
import jwt from "jsonwebtoken";
import { getGoogleUser } from "../util/getGoogleUser";
import { updateOrCreateUserFromOAuth } from "../util/updateOrCreateUserFromOAuth";

export const googleOAuthCallbackRoute = {
  path: "/auth/google/callback",
  method: "get",
  handler: async (req, res) => {
    const { code } = req.query;
    const oAuthUserInfo = await getGoogleUser({ code });
    const updatedUser = await updateOrCreateUserFromOAuth({ oAuthUserInfo });
    const { _id: id, isVerified, email, info } = updatedUser;

    jwt.sign(
      { id, isVerified, email, info },
      process.env.JWT_SECRET,
      (err, token) => {
        if (err) return res.sendStatus(500);
        res.redirect(`https://reactauth-frontend.herokuapp.com/user-profile`);
      }
    );
  },
};
