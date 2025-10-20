import { ListItem } from "./ListItem";
import { useState, useMemo } from "react";

export const MainPageListItem = () => {
  const [toggle, setToggle] = useState(false);
  const [testNoRender, setNoRender] = useState(false);

  const testList = useMemo(() => {
    return [
      { id: 1, name: "Test 1" },
      { id: 2, name: "Test 2" },
      { id: 3, name: "Test 3" },
      { id: 4, name: "Test 4" },
      { id: 5, name: "Test 5" },
      { id: 6, name: "Test 6" },
      { id: 7, name: "Test 7" },
    ];
  }, [toggle]);
  return (
    <div>
      {testList.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
      <div onClick={() => setToggle((prev) => !prev)}>Test render</div>
      <div onClick={() => setNoRender((prev) => !prev)}>Test no render</div>
    </div>
  );
};
