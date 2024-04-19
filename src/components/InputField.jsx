
const InputField = (props) => {
    return (
      <>
        <div className="mb-3 row">
          <label htmlFor={props.id} className="col-sm-2 col-form-label">
            {props.labelName}
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control ml-3" id={props.id} />
          </div>
        </div>
      </>
    );
  };
  
export default InputField;


