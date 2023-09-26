interface LinkBoxProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
}

export const LinkBox: React.FC<LinkBoxProps> = ({
  icon,
  title,
  subtitle,
  onClick,
}) => {
  return (
    <section
      onClick={onClick}
      style={{
        maxWidth: "400px",
      }}
      className="cursor-pointer p-3 flex flex-col gap-2 rounded-lg shadow-md"
    >
      <span className="mb-2">{icon}</span>
      <span className="font-bold text-[12pt]">{title}</span>
      <span className="text-[10pt] text-gray-700">{subtitle}</span>
    </section>
  );
};
