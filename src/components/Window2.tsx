import React from "react";
import { cn } from "../utils/cn";

const Window2 = ({ pluginW, isPluginDragging }: any) => {
  return (
    <div
      className={cn("shrink-0 contents", isPluginDragging && "dragging")}
      style={{ width: pluginW }}
    >
      <h4 style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed magni aspernatur dolor est obcaecati nostrum totam rerum ducimus facilis? Quia voluptate tenetur veniam quae eos unde fuga. Et, alias.</h4>
    </div>
  );
};

export default Window2;
