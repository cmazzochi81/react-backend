/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";
import { sendEmail } from "../util/sendEmail";

export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    const { email, password } = req.body;
    const db = getDbConnection("react-auth-db");
    const user = await db.collection("users").findOne({ email });

    if (user) {
      res.sendStatus(409);
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const verificationString = uuid();

    const startingInfo = {
      hairColor: "",
      favoriteFood: "",
      bio: "",
    };

    const result = await db.collection("users").insertOne({
      email,
      passwordHash,
      info: startingInfo,
      isVerified: false,
      verificationString,
    });
    const { insertedId } = result;

    try {
      await sendEmail({
        to: email,
        from: "cmazzo@me.com",
        subject: "Please verify your email",
        text: ` 
                    Thanks for signing up! To verify your email, click here: 
                    https://react-auth-frontend.herokuapp.com/confirm-email/${verificationString}
                `,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }

    jwt.sign(
      {
        id: insertedId,
        email,
        info: startingInfo,
        isVerified: false,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        res.status(200).json({ token });
      }
    ); //end jwt.sign
  },
};
