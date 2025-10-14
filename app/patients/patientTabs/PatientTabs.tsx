import { ReactNode, useState } from "react";

interface CardProps {
  title?: string;
  icon?: ReactNode;
  tabData?: any;
  className?: string;
}

const PatientTabs: React.FC<CardProps> = ({   tabData, className }) => {
     const [active, setActive] = useState(0)
  return (
    <div
      className={`flex ${className}  justify-between items-center pt-2 border-purple-600
        border-b-2 text-sm  font-medium `}
    >
      <div className="flex flex-wrap gap-1 items-center ">
        {tabData?.length>0&&tabData.map((item: any) => (
          <button
          key={item.id}
          onClick={()=>setActive(item.id)}
            className={`${active===item.id?'bg-primary':'bg-header'} flex flex-row items-center
          text-white px-1  py-[0.7px] rounded-t-md ml-2`}
          >
            <span> {item.icon}</span>
            {item.name}{" "}
          </button>
        ))}
      </div>{" "}
    </div>
  );
};

export default PatientTabs;
