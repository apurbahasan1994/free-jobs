import Input from "../FormInput";
import Label from "../Label";

export default function FormGroup(props) {
  const { target, labelText, type, name, placeholder, required } = props;
  return (
    <div>
      <Label data={{ target, labelText }} />
      <Input data={{ type, name, placeholder, required }} />
    </div>
  );
}
