import { IMiddleware, Middleware, QueryParams, Req } from "@tsed/common";
//@ts-ignore
import QueryBuilder from "typeorm-express-query-builder";

@Middleware()
export class AcceptMimesMiddleware implements IMiddleware {
  use(@Req() req: TsED.Request, @QueryParams() query: any): any {
    const builder = new QueryBuilder(query);
    req.ormQuery = builder.build();
  }
}
