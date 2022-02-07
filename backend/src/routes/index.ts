import General from "./General";
import Auth from "./Auth";
import Transports from "./Transports";
import Vehicle from "./Vehicle";
export default [
  { path: "/", module: General },
  { path: "/auth", module: Auth },
  { path: "/transports", module: Transports },
  { path: "/vehicles", module: Vehicle }
];
