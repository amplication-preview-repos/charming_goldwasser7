import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TaskWhereInput = {
  como?: StringNullableFilter;
  file?: JsonFilter;
  id?: StringFilter;
  oQue?: StringNullableFilter;
  phase?: "Option1";
  quando?: DateTimeNullableFilter;
};
