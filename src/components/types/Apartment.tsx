import { ObjectId } from "mongoose";

type Apartment = {
  images: {
    path: string;
  }[];
  _id: ObjectId;
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
  id: number;
  __v: number;
};

export default Apartment;
