import { useRecordContext, UseRecordContextParams } from "react-admin";
import ImageSlider from "../../../../components/ImageSlider";
import IApartment from "../../../../components/interfaces/IApartment";

export default ({
  source,
  images,
  video,
}: {
  source: string;
  images: string;
  video: string;
}) => {
  const record = useRecordContext();
  return (
    <ImageSlider
      apartment={{ images: record[images], video: record[video] } as IApartment}
    />
  );
};
