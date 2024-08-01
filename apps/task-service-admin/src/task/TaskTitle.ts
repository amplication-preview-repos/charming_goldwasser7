import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "como";

export const TaskTitle = (record: TTask): string => {
  return record.como?.toString() || String(record.id);
};
