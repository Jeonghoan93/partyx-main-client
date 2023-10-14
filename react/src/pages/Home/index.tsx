import { useCurrentUser } from "src/hooks/useCurrentUser";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import Customized from "./Customized";
import Featured from "./Featured";
import Festivals from "./Festivals";
import Main from "./Main";
import Near from "./Near";
import Standouts from "./Standouts";
import StartsSoon from "./StartsSoon";
import Today from "./Today";
import { default as Trending } from "./Trending";

const Home: React.FC = () => {
  const currentUser = useCurrentUser();
  const windowWidth = useWindowWidth();

  const isLarge = windowWidth > 968;

  return (
    <>
      {isLarge ? <Main /> : null}
      {currentUser ? <Customized currentUser={currentUser} /> : null}

      <Standouts />
      <Today />
      <StartsSoon />
      <Near />
      <Featured />
      <Festivals />
      <Trending />
    </>
  );
};

export default Home;
