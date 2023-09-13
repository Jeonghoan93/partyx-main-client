import Container from "src/components/Container";

const FestivalSlider: React.FC = () => {
  return (
    <Container>
      <div
        className="mt-4 relative rounded-lg overflow-hidden shadow-2xl"
        style={{
          height: "50vw",
        }}
      >
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_1280.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="hidden md:block z-10 h-full w-full bg-white bg-opacity-90 rounded-lg shadow-xl">
          hi
        </div>
      </div>
    </Container>
  );
};

export default FestivalSlider;
