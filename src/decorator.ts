import express from "express";

const app = express();
app.listen(3000);

/**
 * 写一个简单的 Get 装饰器
 * @param url
 * @returns
 */

const Get = (url: string): MethodDecorator => {
  return (target: any, propertyKey: any, descriptor: PropertyDescriptor) => {
    const func = descriptor?.value;
    app.get(url, func);
  };
};

class Controller {
  constructor() {}
  @Get("/")
  GetHaoKanVideoList(req: any, res: any) {
    res.send("Hello World!");
  }
}
