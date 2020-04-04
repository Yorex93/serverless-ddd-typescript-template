import { APIGatewayProxyResult } from "aws-lambda";
import { HttpException } from "../core/exceptions/http.exception";

export function handleError (err: any): APIGatewayProxyResult {
    if(err instanceof HttpException) {
        return {
            statusCode: err.statusCode,
            body: JSON.stringify({
                message: err.message,
            })
        }
    }
    return {
        statusCode: 500,
        body: JSON.stringify({
            message: 'Unable to process request at this time',
        })
    }
}