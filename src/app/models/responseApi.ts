export interface ResponseApi{
    code: number,
    status: string,
    data: Array<any> | null,
    message: string
}