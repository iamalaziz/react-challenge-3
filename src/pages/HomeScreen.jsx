import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate()

  return (
    <div className="App">
      <h1>Choose difficulty Level</h1>
      <div className="level-container">
        <button className="easy-level" onClick={() => navigate('/easy')}></button>
        <button className="medium-level"></button>
        <button className="hard-level"></button>
      </div>
    </div>
  );
}

export default HomeScreen;
