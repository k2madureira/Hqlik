require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST, // 192.168.99.100
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  difine: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
