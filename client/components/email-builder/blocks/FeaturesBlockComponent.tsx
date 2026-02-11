import React from "react";
import { FeaturesBlock } from "../types";
import { renderBlockToHTML } from "../utils";

interface FeaturesBlockComponentProps {
  block: FeaturesBlock;
  isSelected: boolean;
  onUpdate: (block: FeaturesBlock) => void;
  onDuplicate?: (block: FeaturesBlock, position: number) => void;
  onDelete?: (blockId: string) => void;
  blockIndex?: number;
}

export const FeaturesBlockComponent: React.FC<FeaturesBlockComponentProps> = ({
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
