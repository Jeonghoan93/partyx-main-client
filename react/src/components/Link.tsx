import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link: FC<LinkProps> = ({ href, children, className }) => {
  const navigate = useNavigate();

  const handleLinkClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      navigate(href);
    },
    [href, navigate]
  );

  return (
    <a href={href} onClick={handleLinkClick} className={className}>
      {children}
    </a>
  );
};

export default Link;
