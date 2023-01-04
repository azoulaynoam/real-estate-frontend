import { ObjectId } from "mongoose";

type Apartment = {
  images: {
    path: string;
  }[];
  _id: ObjectId | string;
  action: string;
  free_text_en?: string;
  free_text_he?: string;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  size: number;
  price: number;
  status: boolean;
  video?: string;
  __v: number;
};

export default Apartment;
