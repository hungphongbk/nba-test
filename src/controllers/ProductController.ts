import { Controller, Get } from "@tsed/common";

@Controller("/products")
export class ProductController {
  @Get("/")
  get() {
    return "hello";
  }
}
