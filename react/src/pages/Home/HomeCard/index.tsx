import Container from "src/components/Container";

const HomeCard: React.FC = () => {
  return (
    <Container>
      <div
        className="mt-20 relative rounded-lg overflow-hidden shadow-2xl"
        style={{
          height: "50vw",
        }}
      >
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876_1280.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </Container>
  );
};

export default HomeCard;
