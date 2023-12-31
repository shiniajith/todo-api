const config = {
  dbName: process.env.DB_NAME || "",
  dbHost: process.env.DB_HOST || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbUser: process.env.DB_USER || "",
  jwtSecret: process.env.JWT_SECRET || "",
  port: process.env.PORT || "",
};

export default config;
