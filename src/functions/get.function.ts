import { APIGatewayProxyHandler } from "aws-lambda";
import getName from "../core/get.service";
import { handleError } from "./utils";

export const getFunction: APIGatewayProxyHandler = async (event, _context) => {
    try {
        const result = getName();
        return {
            statusCode: 200,
            body: JSON.stringify({
                result,
                input: event,
            }, null, 2),
        };
    } catch (err) {
        return handleError(err);
    }
}
