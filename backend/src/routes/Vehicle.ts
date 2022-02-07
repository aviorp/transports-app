import express, { NextFunction, Request, Response } from "express";
import { createVehicle, getVehicles, updateVehicleIssue } from "../BL/Vehicle";
import { BadRequestError } from "../errorHandlers";

const router = express.Router();

/**
 * The api send all the vehicles
 *
 */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const vehicles = await getVehicles();
    res.status(200).send(vehicles);
  } catch (error: any) {
    next(new BadRequestError(error));
  }
});
/**
 * The api creates new vehicle
 *
 */
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createVehicle(req.body);
    res.status(201).send("Vehicle created.");
  } catch (error: any) {
    next(new BadRequestError(error));
  }
});
/**
 * The api update vehicle history
 *
 */
router.patch(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, text } = req.body;
      await updateVehicleIssue(id, text);
      res.status(201).send("Vehicle updated.");
    } catch (error: any) {
      next(new BadRequestError(error));
    }
  }
);

export default router;
