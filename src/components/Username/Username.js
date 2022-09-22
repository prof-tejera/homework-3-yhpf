import "./Username.css";

const Username = ({id}) => { 

  return (
        <div>
          <label htmlFor={id}><sup className="redstar">&#8727;</sup> Username: </label>
          <input type="text" name={id} id={id} placeholder="enter username" className="un-input"></input><br/>
        </div>
      );
};


export default Username;
