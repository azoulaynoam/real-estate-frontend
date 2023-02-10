// in app.js
import { Admin, Resource } from "react-admin";
import dataProvider from "./DataProvider";
import authProvider from "./AuthProvider";
import { PropertyList, PropertyEdit, PropertyCreate } from "./FormProvider";

function AdminPanel() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      basename="/admin"
    >
      <Resource
        name="properties"
        list={PropertyList}
        edit={PropertyEdit}
        create={PropertyCreate}
      />
    </Admin>
  );
}

export default AdminPanel;
