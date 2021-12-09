const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const getDbConnection = require('../db');

export const logInRoute = {
    path: '/api/login',
    method: 'post',
    handler: async (req, res) => {

        try{

                const {email, password } = req.body;
                const db = getDbConnection('react-auth-db');
                const user = await db.collection('users').findOne({email});

                if(!user) return res.sendStatus(401);

                const {_id: id, isVerified, passwordHash, info } = user;

                const isCorrect = await bcrypt.compare(password, passwordHash);

                if (isCorrect) {
                    jwt.sign({id, isVerified, email, info}, process.env.JWT_SECRET, {expiresIn: '365d'}, (err, token) => {
                        if(err){
                            res.status(500).json(err);
                        }
                        res.status(200).json({token});
                    });
                } else {
                    res.sendStatus(401);
                }
        }catch(error){
        console.log("Mazzo the error is: " + error);
        }
    },
}