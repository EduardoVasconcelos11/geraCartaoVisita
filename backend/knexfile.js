const config = {
    development: {
        client: 'pg',
        connection: {
            host: 'db',
            user: 'admin',
            password: '159753',
            database: 'postgres'
        },
        migrations: {
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        }
    }
};

export default config;
