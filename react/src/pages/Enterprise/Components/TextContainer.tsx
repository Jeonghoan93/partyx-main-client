import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

const TextContainer = () => {
  const isClient = typeof window === "object";
  const initialWidth = isClient ? window.innerWidth : 1200;
  const [windowWidth, setWindowWidth] = useState(initialWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              <h2 className="text-[15pt] font-semibold">Festivals</h2>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <div className="cursor-pointer">
                <Avatar
                  src={
                    "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
                  }
                />
              </div>
              <div className="flex flex-col justify-between">
                <h1 className="font-semibold font-mono text-[11pt]">Jimmy</h1>
                <span className="text-gray-700 text-[9pt]">Founder</span>
              </div>
            </div>
          </div>

          <p className="text-[12pt] text-gray-800 font-medium font-serif">
            Connect directly with eager attendees. Boost ticket sales, shine
            brighter, and create unforgettable moments with PartyX.
          </p>

          <div className="mt-5">
            <span className="cursor-pointer font-semibold underline">
              Read full
            </span>
          </div>
        </div>
      </section>
    );
  };

  if (windowWidth < 700) {
    return <DynamicContainer />;
  }

  return <DynamicContainer style={{ maxWidth: "500px" }} />;
};

export default TextContainer;
