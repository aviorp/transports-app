import express, { NextFunction, Request, Response } from "express";
import {
  createTransport,
  getTransportById,
  getTransports
} from "../BL/Transport";
import { BadRequestError } from "../errorHandlers";

const router = express.Router();

/**
 * The api send all of the available transports
 *
 */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const transports = await getTransports();
    return await res.status(200).send(transports);
  } catch (error: any) {
    next(new BadRequestError(error));
  }
});

/**
 * The api send specific transport
 *
 */
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const transports = await getTransportById(id);
    return await res.status(200).send(transports);
  } catch (error: any) {
    next(new BadRequestError(error));
  }
});

/**
 * The api creates new transport.
 *
 */

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createTransport(req.body);
    await res.status(201).send({
      message: "Transport Created."
    });
  } catch (error: any) {
    next(new BadRequestError(error));
  }
});

export default router;
