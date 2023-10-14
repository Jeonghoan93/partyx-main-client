import LoginModal from "src/Components/modals/LoginModal";
import RegisterModal from "src/Components/modals/RegisterModal";
import RentModal from "src/Components/modals/RentModal";
import SearchModal from "src/Components/modals/SearchModal";

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <SearchModal />
      <RentModal />
    </>
  );
};

export default ModalsProvider;
