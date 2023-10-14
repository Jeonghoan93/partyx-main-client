import { FC } from "react";

interface Props {
  title: string;
}

const FooterSectionTitle: FC<Props> = ({ title }: Props) => {
  return (
    <div className="mb-2">
      <p className="text-[14pt] font-bold text-black">{title}</p>
    </div>
  );
};

export default FooterSectionTitle;
