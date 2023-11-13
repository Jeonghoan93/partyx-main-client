import { events } from "../../../../../../services/api-examples/events";
import CardSlider from "./Components/CardSlider";
import TextBox from "../../../Components/TextBox";
import { formatDate } from "src/utils/formatDate";

const Today = () => {
  return (
    <>
      <TextBox
        text={formatDate(new Date(), {
          full: true,
        })}
      />
      <CardSlider events={events} />
    </>
  );
};

export default Today;
