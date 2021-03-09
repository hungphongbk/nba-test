import { Controller, Get } from "@tsed/common";

@Controller("/audit")
export class AuditController {
  @Get("/")
  get() {
    return "hello";
  }
}
