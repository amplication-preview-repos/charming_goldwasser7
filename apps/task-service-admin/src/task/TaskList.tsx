import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="como" source="como" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="file" source="file" />
        <TextField label="ID" source="id" />
        <TextField label="o_que" source="oQue" />
        <TextField label="phase" source="phase" />
        <TextField label="quando" source="quando" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
