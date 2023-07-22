import { Request, Response } from "express";

//hacer la solicitud get a las rutas que estan completas

export const getTaskComplete = (req: Request, res: Response) => {
  res
    .status(200)
    .json(
      "GET a una ruta específica para listar las tareas que están completas."
    );
};

//hacer la solicitud get a las rutas que esten incompletas

export const getTaskIncompletas = (req: Request, res: Response) => {
  res
    .status(200)
    .json(
      "GET a una ruta específica para listar las tareas que están incompletas."
    );
};
