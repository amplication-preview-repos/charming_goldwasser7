import { JsonValue } from "type-fest";

export type Task = {
  como: string | null;
  createdAt: Date;
  file: JsonValue;
  id: string;
  oQue: string | null;
  phase?: "Option1" | null;
  quando: Date | null;
  updatedAt: Date;
};
