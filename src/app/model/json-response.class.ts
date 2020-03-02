export class JsonResponse {
    data: any;
    error: string;
    meta: number;
    
    constructor(data: any = null,
                error: any = null,
                meta: any = null ) {
                  this.data = data;
                  this.error = error;
                  this.meta = meta;
    }

}