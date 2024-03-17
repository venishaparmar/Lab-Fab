import "../styles/dropdown.css";

const DropDown = ({ label, items }) => {
  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-info dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {label}
        </button>
        <ul className="dropdown-menu">
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default DropDown;
