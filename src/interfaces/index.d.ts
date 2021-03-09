//@ts-ignore
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace TsED {
    interface Request extends Express.Request {
      ormQuery?: any;
    }
  }
}
