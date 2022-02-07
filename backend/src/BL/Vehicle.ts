import Vehicle from "../db/models/Vehicle";
import { VehicleI } from "../interfaces";
import VehicleService from "../services/VehicleService";

export const getVehicles = (): VehicleI[] => VehicleService.getVehicles();
export const createVehicle = (newVehicle: VehicleI) =>
  VehicleService.createVehicle(newVehicle);
export const updateVehicleIssue = (id: string, text: string) =>
  VehicleService.updateVehicleIssue(id, text);
