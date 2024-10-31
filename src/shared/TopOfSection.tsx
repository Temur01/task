type Props = {
  title: string;
};

const TopOfSection = ({ title }: Props) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-2 h-6 bg-blue-light mr-2"></div>
      <h2 className="text-2xl font-bold text-gray-light"> {title}</h2>
      <div className="flex-1 ml-4 border-t border-2 border-gray-200"></div>
    </div>
  );
};

export default TopOfSection;
