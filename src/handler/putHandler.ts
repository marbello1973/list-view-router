import { Request, Response } from "express";

export const putHandler = (req: Request, res: Response) => {
  res
    .status(200)
    .json("UPDATE a una ruta específica para actualizar una tarea");
};
