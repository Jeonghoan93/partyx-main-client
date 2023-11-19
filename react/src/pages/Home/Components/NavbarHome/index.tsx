import Container from "src/components/Container";
import Logo from "src/components/navbar/Components/Logo";
import useLoginModal from "src/hooks/useLoginModal";
import useSearchModal from "src/hooks/useSearchModal";
import SearchBar from "./Components/SearchBar";
import UserMenu from "./Components/UserMenu";

const NavbarHome: React.FC = () => {
  const searchModal = useSearchModal();
  const loginModal = useLoginModal();

  return (
    <div className="fixed z-10 w-full bg-white">
      <Container>
        <div
          className="
          px-4
          py-3
        "
        >
          <div className="flex flex-row justify-between items-center gap-3">
            <Logo />

            <div className="flex flex-row gap-3 items-center">
              <SearchBar toggleOpen={searchModal.onOpen} />
              <UserMenu toggleOpen={loginModal.onOpen} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavbarHome;
