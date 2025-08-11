import React from "react";

export default function ProductBadge({ tag, discount }: { tag?: "sale" | "new"; discount?: number }) {
  if (!tag) return null;

  const styles = tag === "sale"
    ? "bg-red text-white"
    : "bg-green text-white";

  return (
    <span className={`absolute top-2 right-2 text-xs w-[2rem] h-[2rem] flex items-center justify-center rounded-full ${styles}`}>
      {tag === "sale" ? `-${discount}%` : "New"}
    </span>
  );
}
