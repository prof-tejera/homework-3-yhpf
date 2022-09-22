import "./LoginForm.css";
import Panel from "components/Panel/Panel";
import Form from "components/Form/Form";
import Username from "components/Username/Username";
import Password from "components/Password/Password";
import Remember from "components/Remember/Remember";
import Submit from "components/Submit/Submit";

const LoginForm = () => {

  return (
    <Panel>
      <Form action="#">
        <Username id="un"></Username>
        <Password id="pw"></Password>
        <Remember id="remember"></Remember>
        <Submit id="submit"></Submit>
      </Form>
    </Panel>
  );
};

export default LoginForm;
