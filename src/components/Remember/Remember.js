import "./Remember.css";

const Remember = ({id}) => { 

    return (
        <div className="remember-me">
            <input type="checkbox" name={id} id={id}></input>
            <label  htmlFor={id}> Remember me</label><br/>
        </div>
    );
};

export default Remember;