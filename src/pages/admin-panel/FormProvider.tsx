import IApartment from "../../components/interfaces/IApartment";
import {
  List,
  Datagrid,
  Edit,
  Create,
  TextField,
  EditButton,
  TextInput,
  SelectInput,
  BooleanInput,
  NumberInput,
  NumberField,
  BooleanField,
  ArrayInput,
  ImageInput,
  ArrayField,
  SimpleForm,
  ImageField,
  SingleFieldList,
  FileInput,
  FileField,
  useRecordContext,
} from "react-admin";
import ImageSliderField from "./components/fields/imageSliderField";

var sell_rent = [
  { id: "sell", name: "Sell" },
  { id: "rent", name: "Rent" },
];

const PropertyTitle = (props: { record: IApartment }) => {
  return (
    <span>
      Property Registration {props.record ? `"${props.record._id}"` : ""}
    </span>
  );
};

export const PropertyList = (props: { data: IApartment }) => (
  <List title={<PropertyTitle record={props.data} />} {...props}>
    <Datagrid>
      <TextField aria-disabled={true} source="_id" />
      <TextField source="action" />
      <BooleanField source="status" />
      <TextField source="free_text_en" aria-multiline={true} />
      <TextField source="free_text_he" aria-multiline={true} />
      <NumberField source="rooms" />
      <NumberField source="bedrooms" />
      <NumberField source="bathrooms" />
      <NumberField source="size" />
      <NumberField
        source="price"
        options={{ style: "currency", currency: "ILS" }}
      />
      <ImageSliderField source="media" images="images" video="video" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PropertyEdit = (props: { record: IApartment }) => (
  <Edit title={<PropertyTitle record={props.record} />} {...props}>
    <SimpleForm>
      <TextInput disabled={true} source="_id" />
      <SelectInput
        source="action"
        choices={sell_rent}
        defaultValue="sell"
        label="Sell or Rent"
      />
      <BooleanInput source="status" label="Availability" />
      <TextInput
        source="free_text_en"
        label="Property Description in English"
        multiline
      />
      <TextInput
        source="free_text_he"
        label="Property Description in Hebrew"
        multiline
      />
      <NumberInput source="rooms" label="Number of rooms" />
      <NumberInput source="bedrooms" label="Number of bedrooms" />
      <NumberInput source="bathrooms" label="Number of bathrooms" />
      <NumberInput source="size" label="Size in Square Meter" />
      <NumberInput source="price" label="Price in ILS" />
      <FileInput source="video" accept="video/*">
        <FileField source="path" />
      </FileInput>
      <ImageInput
        label="Related Images"
        accept="image/*"
        placeholder={<p>Drop your file here</p>}
        source="images"
        multiple={true}
        labelMultiple="images"
      >
        <ImageField source="path" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const PropertyCreate = (props: { record: IApartment }) => (
  <Create title="Create a Property" {...props}>
    <SimpleForm>
      <SelectInput
        source="action"
        choices={sell_rent}
        defaultValue="sell"
        label="Sell or Rent"
      />
      <TextInput
        source="free_text_en"
        label="Property Description in English"
        multiline
      />
      <TextInput
        source="free_text_he"
        label="Property Description in Hebrew"
        multiline
      />
      <NumberInput source="rooms" label="Number of rooms" />
      <NumberInput source="bedrooms" label="Number of bedrooms" />
      <NumberInput source="bathrooms" label="Number of bathrooms" />
      <NumberInput source="size" label="Size in Square Meter" />
      <NumberInput source="price" label="Price in ILS" />
      <FileInput source="video" accept="video/*">
        <FileField source="path" />
      </FileInput>
      <ArrayInput source="images">
        <ImageInput
          label="Related Images"
          multiple={true}
          accept="image/*"
          placeholder={<p>Drop your file here</p>}
          source="path"
        >
          <ImageField source="path" />
        </ImageInput>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
