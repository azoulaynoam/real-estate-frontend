import { useRecordContext } from "react-admin";
import ImageSlider from "../../../../components/ImageSlider";
import IApartment from "../../../../components/interfaces/IApartment";

const ImageSliderField = ({
  source,
  images,
  video,
}: {
  source: string;
  images: string;
  video: string;
}) => {
  const useRecord = useRecordContext();
  return (
    <ImageSlider
      apartment={
        { images: useRecord[images], video: useRecord[video] } as IApartment
      }
    />
  );
};

export default ImageSliderField;
