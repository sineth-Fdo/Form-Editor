import { useText } from "@/app/(form)/contexts/StateContext";
import { Switch } from "@/components/ui/switch";
import ContentBottom from "../ContentBottom";
import TextInput from "./_components/TextInput";

const EmailForm = ({onPress}:any) => {
  const {  emailTitle, setEmailTitle,emailDescription, setEmailDescription,emailRequired, setEmailRequired ,emailValue, setEmailValue } = useText();

  return (
    <div>
      <TextInput
        name="Title"
        placeholder="Enter Title"
        value={emailTitle}
        onchange={(e: any) => setEmailTitle(e.target.value)}
      />

      <TextInput 
        name="Description" 
        placeholder="Enter Description" 
        value = {emailDescription}
        onchange = {(e: any) => setEmailDescription(e.target.value)}
        />
      <div className=" w-[100%] flex justify-between">
        <h1 className="text-[#000] text-sm">required</h1>
        <Switch 
          checked={emailRequired}
          onCheckedChange={(e: any) => setEmailRequired(e)}
        />
      </div>
      <div className=" w-[100%] h-20 flex justify-between items-center">
        <ContentBottom name="Save" onClick={() => {
          onPress()
          
          }} />
        <ContentBottom name="Discard" />
      </div>
    </div>
  );
};

export default EmailForm;
