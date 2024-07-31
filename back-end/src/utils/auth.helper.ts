import Jwt from "jsonwebtoken";
import { ErrorResponse } from "../dtos/common.dto";

export function loginRequired(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const req = args[0];
    const res = args[1];
    try {
      const token: string = req.headers.authorization?.replace("Bearer ", "");
      Jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as string,
        (err, decoded) => {
          if (err) {
            throw new Error("Unauthorized Access");
          }
          req.user = decoded;
        }
      );
      return originalMethod.apply(this, args);
    } catch (err: any) {
      res.status(401).json(new ErrorResponse(401,err.message));
    }
  };

  return descriptor;
}

export function roleRequired(...roles: string[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const req = args[0];
      const res = args[1];
      try {
        if (
          !req.user ||
          req.user.roles.filter((role: string) => roles.includes(role))
            .length <= 0
        ) {
          throw new Error("Permission Denied");
        }
        return originalMethod.apply(this, args);
      } catch (err: any) {
        res.status(403).json(new ErrorResponse(403,err.message));
      }
    };

    return descriptor;
  };
}
