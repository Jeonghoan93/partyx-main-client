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
      className="cursor-pointer py-3 flex flex-row items-center gap-6"
    >
      <span className="">{icon}</span>
      <div className="flex flex-col">
        <span className="font-semibold text-[11pt]">{title}</span>
        <span className="font-light text-[9pt]">{subtitle}</span>
      </div>
    </section>
  );
};
