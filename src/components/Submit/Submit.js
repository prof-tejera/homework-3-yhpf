import "./Submit.css";

const Submit = ({id}) => { 

    return (
        <input type="submit" name={id} id={id} className="submit"></input>
    );
};

export default Submit;