import { Request, Response } from "express";
import { Controller, prisma } from "../Controller";
import { User, PrismaClient } from "@prisma/client";

class UserController extends Controller {
  protected model = prisma.user;
  constructor() {
    super();
    this.create = this.create.bind(this);
    this.index = this.index.bind(this);
    this.getSingle = this.getSingle.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  public create(request: Request, response: Response) {
    const { username, password, fullname, email, schoolId }: User =
      request.body;
    this.model
      .create({ data: { username, password, fullname, email, schoolId } })
      .then((results) => this.send(response, results))
      .catch((error) => this.sendError(response, error));
  }
  public index(request: Request, response: Response) {
    this.model
      .findMany({
        include: {
          School: true,
          writtenPosts: {
            include: {
              Category: true,
            },
          },
        },
      })
      .then((results) => this.send(response, results))
      .catch((error) => {
        console.log(error);
        this.sendError(response, error);
      });
  }
  public getSingle(request: Request, response: Response) {
    const id: string | null = request.params?.id;
    this.model
      .findFirst({ where: { id } })
      .then((results) => this.send(response, results))
      .catch((error) => this.sendError(response, error));
  }
  public update(request: Request, response: Response) {
    const id: string | null = request.params?.id;
    const { fullname } = request.body;
    this.model
      .update({ where: { id }, data: { fullname } })
      .then((results) => this.send(response, results))
      .catch((error) => this.sendError(response, error));
  }
  public delete(request: Request, response: Response) {
    const id: string | null = request.params?.id;
    this.model
      .delete({ where: { id } })
      .then((results) => this.send(response, results))
      .catch((error) => this.sendError(response, error));
  }
}

module.exports = new UserController();
