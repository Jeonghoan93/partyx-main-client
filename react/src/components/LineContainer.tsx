interface LineContainerProps {
  children: React.ReactNode;
}

const LineContainer: React.FC<LineContainerProps> = ({ children }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow border-[1px] border-neutral-200">
      {children}
    </div>
  );
};

export default LineContainer;
