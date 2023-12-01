import { createParamDecorator, ExecutionContext} from "@nestjs/common";
import { ContextCreator } from "@nestjs/core/helpers/context-creator";


export const GetUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request: Express.Request = ctx
        .switchToHttp()
        .getRequest();
        return request.user;
    },
);