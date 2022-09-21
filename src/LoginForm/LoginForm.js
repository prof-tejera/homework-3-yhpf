import "./LoginForm.css";
import Panel from "components/Panel/Panel";
import Form from "components/Form/Form";
import Input from "components/Input/Input";

const LoginForm = () => {
  const formInput = [
    {type: "text", name: "un", id: "un", label: "Username", placeholder:"enter username"},
    {type: "password", name: "pw", id: "pw", label: 'Password', placeholder:"enter password"},  
    {type: "checkbox", name: "remember", id: "remember", label: "Remember me"},
    {type: "submit", name: "submit", id: "submit"}   
  ];

  return (
    <Panel>
      <Form action="#">
        {formInput.map(({type, name, id, label, placeholder}) => <Input key={id} type={type} name={name} id={id} label={label} placeholder={placeholder}></Input>)}
      </Form>
    </Panel>
  );
};

export default LoginForm;
