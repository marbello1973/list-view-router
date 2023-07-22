import { Request, Response } from "express";

export const deleteTask = (req: Request, res: Response) => {
  res
    .status(200)
    .json(" DELETE a una ruta específica para eliminar una tarea.");
};
