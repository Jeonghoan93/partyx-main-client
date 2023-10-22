interface ReservationStatusCardProps {
  status: string;
  icon: React.ReactNode;
  message: string;
}

const ReservationStatusCard: React.FC<ReservationStatusCardProps> = ({
  status,
  icon,
  message,
}) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex flex-row items-center gap-1">
        <span className="font-bold text-[11pt] text-yellow-700">{status}</span>
        <span className="border-[1px] rounded-full bg-yellow-100">{icon}</span>
      </div>

      <span className="text-gray-600 font-semibold text-[10pt]">{message}</span>
    </div>
  );
};

export default ReservationStatusCard;
