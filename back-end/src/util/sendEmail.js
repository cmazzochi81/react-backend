/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import sendgrid from "@sendgrid/mail";

const SENDGRID_API_KEY =
  "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";

sendgrid.setApiKey(SENDGRID_API_KEY);

export const sendEmail = ({ to, from, subject, text, html }) => {
  const msg = { to, from, subject, text, html };
  return sendgrid.send(msg);
};
