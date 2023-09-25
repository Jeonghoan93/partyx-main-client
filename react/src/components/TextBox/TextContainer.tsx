import { Avatar } from "@mui/material";
import { useState } from "react";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import TextModal from "./TextModal";

interface TextContainerProps {
  title: string;
  desc: string[] | string;
  user: {
    img: string;
    name: string;
    role: string;
  };
}

const TextContainer: React.FC<TextContainerProps> = ({ title, desc, user }) => {
  const windowWidth = useWindowWidth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DynamicContainer: React.FC<{
    style?: React.CSSProperties;
  }> = ({ style }) => {
    return (
      <section className="mt-2" style={style}>
        <div className="bg-gray-120 p-5 rounded-lg shadow-md space-y-6 mb-10">
          {/* Head */}
          <div
            className="flex flex-row justify-between items-center"
            style={{
              maxHeight: "200px",
            }}
          >
            <div>
              <h2 className="text-[13pt] font-semibold">
                {title.length > 30 ? title.slice(0, 30) + "..." : title}
              </h2>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <div className="cursor-pointer">
                <Avatar src={user.img} />
              </div>
              <div className="flex flex-col justify-between">
                <h1 className="font-semibold font-mono text-[11pt]">
                  {user.name}
                </h1>
                <span className="text-gray-700 text-[9pt]">{user.role}</span>
              </div>
            </div>
          </div>

          {Array.isArray(desc) ? (
            desc.map((description, index) => (
              <p
                key={index}
                className="text-[12pt] text-gray-800 font-medium font-serif mb-2"
              >
                {description}
              </p>
            ))
          ) : (
            <p className="text-[12pt] text-gray-800 font-medium font-serif">
              {desc.length > 200 ? desc.slice(0, 200) + "..." : desc}
            </p>
          )}

          <div className="mt-5">
            <span
              onClick={handleOpen}
              className="cursor-pointer font-semibold underline"
            >
              Read full
            </span>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <DynamicContainer
        style={windowWidth < 700 ? {} : { maxWidth: "500px" }}
      />

      {/* Custom Modal */}
      {open && (
        <TextModal title={title} desc={desc} handleClose={handleClose} />
      )}
    </>
  );
};

export default TextContainer;
