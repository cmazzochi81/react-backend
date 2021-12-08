import { sendEmail } from '../util/sendEmail';

export const testEmailRoute = {

    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try{
            await sendEmail({
                to: 'cmazzochi81+test1@gmail.com',
                from: 'cmazzochi81@gmail.com',
                subject: 'Does this work',
                text: 'If you\'re reading this, then yes, you are successful.'
            });
            res.sendStatus(200);
        }catch(e){
            console.log("Mazzo the error is: " + e);
            res.sendStatus(500);
        }
    }
}