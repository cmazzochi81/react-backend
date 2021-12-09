const jwt = require('jsonwebtoken');
const ObjectID = require('mongodb');
const getDbConnection = require('../db');

export const updateUserInfoRoute = { 

    path: '/api/users/:userId',
    method: 'put',
    handler: async (req, res) => {

    try{
        const{ authorization } = req.headers;
        const {userId} = req.params;

        const updates = (
            ({
            favoriteFood,
            hairColor,
            bio,
            }) => ({
            favoriteFood,
            hairColor,
            bio,
        }))(req.body);

        if (!authorization){
            return res.status(401).json({message: 'No authorization headers sent'});
        }

        const token = authorization.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded ) => {
            if (err) return res.status(401).json({message: 'Unable to verify token'});
            console.log(err);

            const { id, isVerified } = decoded;

            if (id !== userId) return res.status(403).json({message: 'No authorization to update user data' });

            if (!isVerified) return res.status(403).json({message: 'You need to verify your email before you can update your data.'});

            const db = getDbConnection('react-auth-db');
            const result = await db.collection('users').findOneAndUpdate(
                { _id: ObjectID(id) },
                { $set: { info: updates }},
                { returnOriginal: false},
            );
            const {email, info } = result.value;

            jwt.sign({ id, email, isVerified, info }, process.env.JWT_SECRET, {expiresIn: '365d'}, (err, token) =>{
                if(err){
                    return res.status(200).json(err);
                }
                res.status(200).json({ token });
            })
        })
    }catch(error){
        console.log("Mazzo the error is: " + error);
    }
        
    },
}