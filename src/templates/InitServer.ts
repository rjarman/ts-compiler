export interface ServerArg {
    middleware: any;
    assetsPath: any;
    handlers: any;
}

export interface ServerFunc {
    initRoute(): void;
}