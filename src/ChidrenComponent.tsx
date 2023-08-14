import { useRecoilValue } from "recoil";
import { todoItemData } from "./api/state/todoAtom";

export default function ChidrenComponent() {
  const todo = useRecoilValue(todoItemData);
  return (
    <div>
      <h2>Children </h2>
      {todo.map((i) => (
        <div key={i.id}>{i.title}</div>
      ))}
    </div>
  );
}
