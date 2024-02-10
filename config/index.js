import dotenv from 'dotenv';

dotenv.config();

const config = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        name: process.env.DB_NAME || 'summitbyte'
    },
    server: {
        port: process.env.PORT || 3000
    },
    jwtSecret: process.env.JWT_SECRET || '4e7b9a951027462a8901e35b9e39d194bb8eabb4d923b1202bb56b042f7d4a20'
};
export default config;