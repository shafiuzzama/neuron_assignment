import React from "react";
import { cn } from "../utils/cn";

const Window1 = ({ isFileDragging, fileW }: any) => {
  return (
    <div
      className={cn("shrink-0 contents", isFileDragging && "dragging")}
      style={{ width: fileW }}
    >
      <h4 style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laudantium quae rerum minima deleniti veritatis eos ipsa eius, cumque inventore. Ducimus aliquam tempora beatae rem, eligendi mollitia provident veritatis odio?</h4>
    </div>
  );
};

export default Window1;
