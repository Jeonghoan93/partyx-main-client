interface TimePickerProps {
  value: { hour: number; minute: number };
  onChange: (value: { hour: number; minute: number }) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ value, onChange }) => {
  return (
    <div>
      <select
        value={value.hour}
        onChange={(e) => onChange({ ...value, hour: parseInt(e.target.value) })}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <option key={i} value={i}>
            {i.toString().padStart(2, "0")}:00
          </option>
        ))}
      </select>
      :
      <select
        value={value.minute}
        onChange={(e) =>
          onChange({ ...value, minute: parseInt(e.target.value) })
        }
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
