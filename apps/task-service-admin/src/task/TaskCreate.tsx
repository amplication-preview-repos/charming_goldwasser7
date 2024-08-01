import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="como" source="como" />
        <div />
        <TextInput label="o_que" source="oQue" />
        <SelectInput
          source="phase"
          label="phase"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="quando" source="quando" />
      </SimpleForm>
    </Create>
  );
};
