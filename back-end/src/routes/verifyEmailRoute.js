/* eslint-disable linebreak-style */
/* eslint-disable curly */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable comma-dangle */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db";

export const verifyEmailRoute = {
  path: "/api/confirm-email",
  method: "put",
  handler: async (req, res) => {
    const { verificationString } = req.body;
    const db = getDbConnection("react-auth-db");
    const result = await db.collection("users").findOne({
      verificationString,
    });

    if (!result)
      return res
        .status(401)
        .json({ message: "The email verifcation code is incorrect " });

    const { _id: id, email, info } = result;

    await db.collection("users").updateOne(
      { _id: ObjectId(id) },
      {
        $set: { isVerified: true },
      }
    );

    jwt.sign(
      { id, email, isVerified: true, info },
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) return res.sendStatus(500);
        res.status(200).json({ token });
      }
    );
  },
};
