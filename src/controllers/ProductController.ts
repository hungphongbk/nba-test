import { Controller, Get, Req, UseBefore } from "@tsed/common";
import { QueryBuilderMiddleware } from "../middlewares/QueryBuilderMiddleware";
import { Inject } from "@tsed/di";
import { ProductRepository } from "../repositories/ProductRepository";

@Controller("/products")
export class ProductController {
  @Inject()
  private productRepo: ProductRepository;

  @Get("/")
  @UseBefore(QueryBuilderMiddleware)
  get(@Req() req: Req) {
    return this.productRepo.find(req.ormQuery);
  }
}
