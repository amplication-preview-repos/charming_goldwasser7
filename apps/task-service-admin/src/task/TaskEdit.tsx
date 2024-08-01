import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
