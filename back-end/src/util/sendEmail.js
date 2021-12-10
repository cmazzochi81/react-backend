import sendgrid from '@sendgrid/mail';

const SENDGRID_API_KEY='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';
sendgrid.setApiKey(SENDGRID_API_KEY);

export const sendEmail = ({to, from, subject, text, html }) => {
    const msg = { to, from, subject, text, html };
    return sendgrid.send(msg);
}