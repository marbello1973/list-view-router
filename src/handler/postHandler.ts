import { Request, Response } from "express";

export const createTask = (req: Request, res: Response) => {
  res.status(200).json(" POST a una ruta específica para crear una tarea.");
};
