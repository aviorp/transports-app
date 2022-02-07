import mongoose, { Schema } from "mongoose";
import { VehicleI } from "../../interfaces";

const vehicleSchema: Schema<VehicleI> = new Schema({
  type: {
    type: String,
    required: true,
  },
  seatsNumber: {
    type: Number,
    required: true,
  },
  kilometers: {
    type: Number,
    required: true,
  },
  fuelStatus: {
    type: Number,
    required: true,
  },
  history: {
    type: Array,
    required: true,
    default: [],
  },
  isApprovedForKids: {
    type: Boolean,
    default: false,
  },
});

const Vehicle = mongoose.model("vehicles", vehicleSchema);

export default Vehicle;
