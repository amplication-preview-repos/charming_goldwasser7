import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="como" source="como" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="file" source="file" />
        <TextField label="ID" source="id" />
        <TextField label="o_que" source="oQue" />
        <TextField label="phase" source="phase" />
        <TextField label="quando" source="quando" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
