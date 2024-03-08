export default function Input(props) {
  const { type, name, placeholder, required } = props;
  return (
    <input
      type={type}
      name={name}
      id="email"
      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-blue-color focus:border-blue-color block w-full p-2.5"
      placeholder={placeholder}
      required={required}
    />
  );
}
