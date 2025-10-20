import { memo } from "react";

interface ListItemProps {
  item: {
    id: number;
    name: string;
  };
}
export const ListItem = memo(({ item }: ListItemProps) => {
  console.log("render", item.id);
  return <div>{item.name}</div>;
});
