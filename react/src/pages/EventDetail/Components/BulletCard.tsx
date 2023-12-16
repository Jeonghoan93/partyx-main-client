interface BulletCardProps {
  title: string;
  icon: React.ReactNode;
}

const BulletCard: React.FC<BulletCardProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-row gap-2 px-3 py-1 rounded-lg bg-rose-100 items-center shadow-lg">
      <span>{icon}</span>

      <span className="font-bold text-[11pt]">{title}</span>
    </div>
  );
};

export default BulletCard;
