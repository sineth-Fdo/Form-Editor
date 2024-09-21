import { useText } from "@/app/(form)/contexts/StateContext";

const ContactPreview = () => {
  const {
    contactTitle,
    setContactTitle,
    contactDescription,
    setContactDescription,
    contactFields,
    setContactFields,
  } = useText();
  return (
    <div className="w-[60%] h-[50%] flex">
      <div className="relative w-[100%] flex flex-col justify-center items-start gap-2">
        <textarea
          className="border border-transparent hover:border-white w-[90%] rounded-md transition-all duration-700 text-[#fff] bg-transparent resize-none text-4xl"
          value={contactTitle}
          onChange={(e) => setContactTitle(e.target.value)}
        />
        <textarea
          className="border border-transparent hover:border-white w-[90%] rounded-md transition-all duration-700 text-[#fff] resize-none bg-transparent text-xl"
          value={contactDescription}
          onChange={(e) => setContactDescription(e.target.value)}
        />

        {contactFields.length > 0 && (
          <div className="mt-4">
            {contactFields.map((field: any, index: any) => (

              <p key={index} className="text-[#fff] text-lg mb-6">
                  {field.value} *
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPreview;
