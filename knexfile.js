let connectionString = process.platform === 'win32' ? 'postgres://postgres:root@localhost/pfs_expanded' : 'postgres://localhost/pfs_expanded'
  
  module.exports = {
    development: {
        client: 'pg',
        connection: {
          host: "localhost",
          database: "pfs_expanded"
        },
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
  };
  