import { Request, Response, NextFunction } from "express";

export function catchError(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    try {
      const result = await originalMethod.apply(this, args);
      return result;
    } catch (error: any) {
      const res: Response = args[1];
      res.status(500).json({
        status: "error",
        status_code: "E-10001",
        message: error.message,
      });
    }
  };

  return descriptor;
}
