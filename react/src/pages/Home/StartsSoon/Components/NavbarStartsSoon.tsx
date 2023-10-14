import Container from "src/components/Container";

const NavbarStartsSoon: React.FC = () => {
  return (
    <Container>
      <div className="relative w-full bg-white">
        <div
          className="
          py-3
          flex
          flex-col
          gap-3
        "
        >
          <div className="flex flex-row items-center justify-between">
            <span className="text-[14pt] sm:text-[18pt] font-extrabold text-gray-400">
              Starts soon
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavbarStartsSoon;
