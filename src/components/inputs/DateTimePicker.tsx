import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";

type DateTimePickerProps = {
  onChange: (date: Dayjs | null) => void;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({ onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MobileDateTimePicker"]}>
        <DemoItem label="Click or tab to change!">
          <MobileDateTimePicker
            defaultValue={dayjs(new Date())}
            views={["month", "day", "hours", "minutes"]}
            closeOnSelect={true}
            disablePast={true}
            onChange={(value) => {
              onChange(value);
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateTimePicker;
