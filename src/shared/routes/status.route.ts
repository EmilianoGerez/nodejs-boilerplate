import { Router, Request, Response } from "express";
import container from "../di-container";
import StatusController from "../controllers/status.controller";

export const register = (router: Router) => {
  const controller: StatusController = container.get("StatusController");
  router.get("/ping", (req: Request, res: Response) => controller.run(req, res));
};
