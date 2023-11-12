import { useCurrentUser } from "src/hooks/useCurrentUser";
import Customized from "./Customized";
import Featured from "./Featured";
import Festivals from "./Festivals";
import Near from "./Near";
import StartsSoon from "./StartsSoon";
import Today from "./Today";
import { default as Trending } from "./Trending";

const Products: React.FC = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      {currentUser ? <Customized currentUser={currentUser} /> : null}
      <Today />
      <StartsSoon />
      <Near />
      <Featured />
      <Festivals />
      <Trending />
    </>
  );
};

export default Products;
