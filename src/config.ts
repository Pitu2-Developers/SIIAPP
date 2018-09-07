export const PORT: number = parseInt(process.env.PORT) || 7000,
    SECRET_TOKEN: string = "pitonegro",
    SALT_FACTOR: number = 10,
    MONGODB_URI: string = process.env.MONGODB_URI || 'mongodb://admin:123456@localhost:27017/siidb?authSource=admin' 