const SmallPreview = () => {
  return (
    <div className="w-[60%] h-[50%] flex">
      <div className="relative w-[100%] flex flex-col justify-center items-start gap-2">
        <textarea
          className="border border-transparent hover:border-white w-[90%] rounded-md transition-all duration-700 text-[#fff] bg-transparent resize-none text-4xl"
          value="Email Subject"
        />
        <textarea
          className="border border-transparent hover:border-white w-[90%] rounded-md transition-all duration-700 text-[#fff] resize-none bg-transparent text-xl"
          value="Email description"
        />
        <textarea
          className="border-b border-[#fff] w-[90%] h-10  transition-all duration-700 text-[#fff] resize-none bg-transparent text-xl"
          value="Type here ..."
        />
      </div>
    </div>
  );
};

export default SmallPreview;
