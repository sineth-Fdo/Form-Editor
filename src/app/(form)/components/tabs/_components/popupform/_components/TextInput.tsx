import { Input } from "@/components/ui/input";

const TextInput = ({ name, placeholder, value, onchange }: any) => {
  return (
    <div className="mb-6">
      <h1 className="text-[#000] text-sm">{name}</h1>
      <Input 
        placeholder={placeholder}
        value = {value}
        onChange = {onchange}
        />
    </div>
  );
};

export default TextInput;
