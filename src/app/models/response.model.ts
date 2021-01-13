export class ResponseVM<T = any>{
    constructor(
        public success: boolean,
        public message: string,
        public data: T | any,
        public errors: []
    ){}
}