/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
import { getGoogleOAuthUrl } from "../util/getGoogleOAuthUrl";

export const getGoogleOAuthUrlRoute = {
  path: "/auth/google/url",
  method: "get",
  handler: (req, res) => {
    const url = getGoogleOAuthUrl();
    res.status(200).json({ url });
  },
};
