import { useCurrentUser } from "src/hooks/useCurrentUser";
import Customized from "./Customized";
import Featured from "./Featured";
import Near from "./Near";
import Today from "./Today";
import { default as Trending } from "./Trending";

const Products: React.FC = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      {currentUser ? <Customized currentUser={currentUser} /> : null}
      <Today />
      <Near />
      <Featured />
      <Trending />
    </>
  );
};

export default Products;
