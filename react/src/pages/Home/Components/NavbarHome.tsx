import LittleTextBox from "src/components/LittleTextBox";
import Logo from "src/components/navbar/Components/Logo";

const NavbarHome: React.FC = () => {
  return (
    <div className="fixed z-10 w-full bg-white">
      <div
        className="
          px-4
          py-3
        "
      >
        <div className="flex flex-row items-center gap-3">
          <Logo />

          <div
            className="
          flex 
          flex-row 
          items-center 
          overflow-y-auto
          gap-2
          no-scrollbar
         
        "
          >
            <LittleTextBox text="Techno & House" onClick={() => {}} />
            <LittleTextBox text="Club events" onClick={() => {}} />
            <LittleTextBox text="Rave" onClick={() => {}} />
            <LittleTextBox text="House parties" onClick={() => {}} />
            <LittleTextBox text="Festivals" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
