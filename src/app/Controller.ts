import { Response } from "express";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export class Controller {
  constructor() {
    this.send = this.send.bind(this);
    this.sendError = this.sendError.bind(this);
  }
  public send<T>(
    response: Response,
    data: T,
    status: number = 200,
    message: string = "success"
  ): void {
    const result = {
      status,
      message,
      data,
    };
    response.json(result).status(status);
  }

  public sendError<T>(
    response: Response,
    data: T,
    status: number = 400,
    message: string = "error"
  ): void {
    console.log(data);
    const result = {
      status,
      message,
      data,
    };
    response.json(result).status(status);
  }
}
