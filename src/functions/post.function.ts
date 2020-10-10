import { APIGatewayProxyHandler } from "aws-lambda";
import getName from "../core/get.service";

export const postFunction: APIGatewayProxyHandler = async (event, _context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            result: getName(),
            method: "POST",
            event,
        }, null, 2),
    };
}