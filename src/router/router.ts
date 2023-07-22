import { Router, Request, Response } from "express";
import { getTaskComplete } from "../handler/gethandler";
import { createTask } from "../handler/postHandler";
import { deleteTask } from "../handler/deleteTask";
import { putHandler } from "../handler/putHandler";

const router = Router();

router.get("/task", getTaskComplete);
router.post("/task", createTask);
router.delete("/task", deleteTask);
router.put("/task", putHandler);

export default router;
