import React from "react";
import { cn } from "../utils/cn";

const Window3 = ({ isTerminalDragging, terminalH }: any) => {
  return (
    <div
      className={cn(
        "shrink-0 bg-darker contents",
        isTerminalDragging && "dragging"
      )}
      style={{ height: terminalH }}
    >
    <h4 style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium ipsam, ex neque non aut nulla inventore laborum aspernatur, repudiandae perferendis atque blanditiis corporis commodi delectus laboriosam sint voluptates quis?</h4>
    </div>
  );
};

export default Window3;
