import { useText } from "@/app/(form)/contexts/StateContext";
import ContentBottom from "../ContentBottom";
import TextInput from "./_components/TextInput";

const ContactForm = ({ onPress }: any) => {
  const {
    contactTitle,
    setContactTitle,
    contactDescription,
    setContactDescription,
    contactFields,
    setContactFields,
  } = useText();

  const addField = () => {
    setContactFields([...contactFields, { value: "" }]);
  };

  const removeField = (index: number) => {
    const updatedFields = contactFields.filter((_: any, i: any) => i !== index);
    setContactFields(updatedFields);
  };

  const handleFieldChange = (index: number, value: string) => {
    const updatedFields = [...contactFields];
    updatedFields[index].value = value;
    setContactFields(updatedFields);
  };

  return (
    <div>
      <TextInput
        name="Title"
        placeholder="Enter Title"
        value={contactTitle}
        onchange={(e: any) => setContactTitle(e.target.value)}
      />

      <TextInput
        name="Description"
        placeholder="Enter Description"
        value={contactDescription}
        onchange={(e: any) => setContactDescription(e.target.value)}
      />

      {contactFields.map((field: any, index: any) => (
        <div
          key={index}
          className="border h-auto flex flex-col justify-center my-2"
        >
          <TextInput
            name=""
            placeholder={`Field ${index + 1}`}
            value={field.value}
            onchange={(e: any) => handleFieldChange(index, e.target.value)}
          />
          <button
            className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-all duration-200"
            onClick={() => removeField(index)}
          >
            <h1 className="text-sm ml-2">Remove Image</h1>
          </button>
        </div>
      ))}

      <div className="flex justify-start items-center gap-2 my-6">
        <h1>Fields</h1>
        <div
          className="border w-10 h-10 bg-[#000] rounded-md flex justify-center items-center cursor-pointer"
          onClick={addField}
        >
          <h1 className="text-white text-xl">+</h1>
        </div>
      </div>

      <div className="w-[100%] h-20 flex justify-between items-center">
        <ContentBottom
          name="Save"
          onClick={() => {
            onPress();
          }}
        />
        <ContentBottom name="Discard" />
      </div>
    </div>
  );
};

export default ContactForm;
