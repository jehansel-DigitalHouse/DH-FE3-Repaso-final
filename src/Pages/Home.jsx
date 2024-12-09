import Card from "../Components/Card";
import { useCharStates } from "../Context/Context";
import withErrorBoundary from "../withErrorBoundary";

const Home = () => {
  const {
    state: { chars },
  } = useCharStates();
  return (
    <div>
      {chars.map((char) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
  );
};

export default withErrorBoundary(Home);
