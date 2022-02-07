import Vehicle from "../db/models/Vehicle";
import { VehicleI } from "../interfaces";

class VehicleService {
  getVehicles() {
    return Vehicle.find();
  }

  createVehicle(newVehicle: VehicleI) {
    return Vehicle.create(newVehicle);
  }

  updateVehicleIssue(id: string, text: string) {
    return Vehicle.updateOne(
      { _id: id },
      {
        $push: {
          history: {
            date: new Date().toISOString().substr(0, 10),
            text,
            isCompleted: false,
          },
        },
      }
    );
  }
}

export default new VehicleService();
