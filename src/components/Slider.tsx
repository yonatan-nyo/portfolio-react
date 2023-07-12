import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Slider({ children }: Props) {
  return (
    <div className="skills-slider grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="skills-cards min-w-fit">
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}

export default Slider;
