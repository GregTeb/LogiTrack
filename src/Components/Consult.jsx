import "./Consult.css";

function Consult({ title, description }) {
  return (
    <div className="consult">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Consult;
