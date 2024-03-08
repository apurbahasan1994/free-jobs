export default function Label(props) {
  const { target, labelText } = props.data;
  return (
    <label
      htmlFor={target}
      className="block mb-2 text-sm font-medium text-text-color"
    >
      {labelText}
    </label>
  );
}
