import Transport from "../db/models/Transports";
import { TransportI } from "../interfaces";

class TransportService {
  getTransports() {
    return Transport.find();
  }

  getTransportById(_id: string) {
    return Transport.findOne({ _id });
  }

  createTransport(newTransport: TransportI) {
    return Transport.create(newTransport);
  }
}

export default new TransportService();
