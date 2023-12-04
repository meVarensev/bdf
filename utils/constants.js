export const API = {
    URL: 'mongodb://localhost:27017/main',
    PORT: 3000,
};

const allowedOrigins = [`http://localhost:${API.PORT}`];

export const CORS_OPTIONS = {
    origin: allowedOrigins,
};
