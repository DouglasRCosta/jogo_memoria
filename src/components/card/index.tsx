import "./index.css";

type props = {
  text: string;
};
function Card(props: props) {
  return (
    <div className="card">
      <div className="container">
            <img src="./src/svgs/react.svg" alt="" style={{filter:`invert(.5)`}}/>
      </div>
    </div>
  );
}

export default Card;
