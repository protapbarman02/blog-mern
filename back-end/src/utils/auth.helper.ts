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
            throw new Error("E-10010");
          }
          req.user = decoded;
        }
      );
      return originalMethod.apply(this, args);
    } catch (err: any) {
      res.status(403).json(new ErrorResponse(err.message));
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
          throw new Error("E-10011");
        }
        return originalMethod.apply(this, args);
      } catch (err: any) {
        res.status(401).json(new ErrorResponse(err.message));
      }
    };

    return descriptor;
  };
}
