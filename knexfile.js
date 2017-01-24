module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/vrm_dev'
    },
    production: {
        client: 'pg',
        connection: process.env.HEROKU_POSTGRESQL_CYAN_URL
    }
}
