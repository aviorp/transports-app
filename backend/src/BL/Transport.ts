import { TransportI } from "../interfaces";
import TransportService from "../services/TransportService";

export const createTransport = (newTransport: TransportI) =>
  TransportService.createTransport(newTransport);

export const getTransports = (): TransportI[] =>
  TransportService.getTransports();

export const getTransportById = (id: string): TransportI =>
  TransportService.getTransportById(id);
