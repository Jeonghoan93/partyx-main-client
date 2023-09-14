const HomeSection: React.FC = () => {
  return (
    <>
      <div
        className="mb-5 relative rounded-lg overflow-hidden shadow-2xl"
        style={{
          height: "40vw",
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
    </>
  );
};

export default HomeSection;
