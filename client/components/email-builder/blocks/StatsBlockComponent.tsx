import React from "react";
import { StatsBlock } from "../types";
import { renderBlockToHTML } from "../utils";

interface StatsBlockComponentProps {
  block: StatsBlock;
  isSelected: boolean;
  onUpdate: (block: StatsBlock) => void;
  onDuplicate?: (block: StatsBlock, position: number) => void;
  onDelete?: (blockId: string) => void;
  blockIndex?: number;
}

export const StatsBlockComponent: React.FC<StatsBlockComponentProps> = ({
  block,
  isSelected,
  onDuplicate,
  onDelete,
  blockIndex = 0,
}) => {
  const html = renderBlockToHTML(block);

  return (
    <div
      className={`w-full rounded-lg overflow-hidden ${
        isSelected ? "ring-2 ring-valasys-orange" : ""
      }`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
