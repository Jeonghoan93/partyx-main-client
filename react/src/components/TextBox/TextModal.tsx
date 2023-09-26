interface TextModalProps {
  title: string;
  desc: string[] | string;
  handleClose: () => void;
}

const TextModal: React.FC<TextModalProps> = ({ title, desc, handleClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-black opacity-60 absolute top-0 left-0 w-full h-full"></div>
      <div className="bg-gray-50 p-6 rounded-lg m-5 relative z-60 max-w-[500px] shadow-lg max-h-[80%] overflow-y-auto no-scrollbar">
        <h2 className="text-[16pt] mb-6 font-semibold">{title}</h2>

        {/* Loop through the desc array and display each description */}
        {Array.isArray(desc) ? (
          desc.map((description, index) => (
            <p
              key={index}
              className="text-[13pt] text-gray-800 mb-4 leading-relaxed"
            >
              {description}
            </p>
          ))
        ) : (
          <p className="text-[13pt] text-gray-800 mb-4 leading-relaxed">
            {desc}
          </p>
        )}

        <button
          onClick={handleClose}
          className="underline text-blue-600 font-semibold mt-6 cursor-pointer hover:text-blue-800 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TextModal;
