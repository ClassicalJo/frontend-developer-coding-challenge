declare global {
    namespace NodeJS {
        interface ProcessEnv {
            USERURL: string;
            PRODUCTURL: string;
            USERTOKEN: string;
            NODE_ENV: 'development' | 'production' ;
            PORT?: string;
            PWD: string;
        }
    }
}

export { }