import jwt from 'jsonwebtoken';


const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustonAuth = token.length < 500;

        let decodedData;

        if (token && isCustonAuth) {
            decodedData = jwt.verify(token, 'test' );

            req.userId = decodedData?.id;
        }
        else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;