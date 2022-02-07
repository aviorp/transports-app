export interface UserI {
  _id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  isAdmin?: boolean;
  toObject?: void;
}

export interface TransportI {
  _id: string;
  origin: string;
  destination: string;
  fromDate: Date;
  toDate: Date;
  fromTime: Date;
  toTime: Date;
  isPermanent: boolean;
  seatsNumber: number;
  vehicleType: string;
  contactName: string;
  contactPhone: number;
  routes: [];
  isActive: boolean;
  isPending: boolean;
}

export interface VehicleI {
  _id: string;
  type: string;
  seatsNumber: number;
  kilometers: number;
  fuelStatus: number;
  history: [];
  isApprovedForKids: boolean;
}
