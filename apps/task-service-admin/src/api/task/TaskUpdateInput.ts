import { InputJsonValue } from "../../types";

export type TaskUpdateInput = {
  como?: string | null;
  file?: InputJsonValue;
  oQue?: string | null;
  phase?: "Option1" | null;
  quando?: Date | null;
};
