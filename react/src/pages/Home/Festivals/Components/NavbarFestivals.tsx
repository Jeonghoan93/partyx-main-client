import Container from "src/components/Container";

const NavbarFestivals: React.FC = () => {
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
            <span className="text-[12pt] sm:text-[16pt] font-extrabold text-gray-400">
              Festivals in Europe
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavbarFestivals;
