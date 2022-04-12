declare global {
    namespace NodeJS {
        interface ProcessEnv {
            USERURL: string;
            PRODUCTURL: string;
            POINTSURL: string;
            USERTOKEN: string;
            REDEEMURL: string;
            NODE_ENV: 'development' | 'production' ;
            PORT?: string;
            PWD: string;
        }
    }
}

export { }