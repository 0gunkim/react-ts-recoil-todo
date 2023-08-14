import "./App.css";
import axios from "axios";
import ChidrenComponent from "./ChidrenComponent";
import { useRecoilState } from "recoil";
import { todoItemData } from "./api/state/todoAtom";
import { useQuery } from "react-query";
function App() {
  const [todoItem, setTodoItem] = useRecoilState(todoItemData);
  const getTodo = async () => {
    return await axios.get("http://localhost:4000/posts");
  };
  const { data, isLoading } = useQuery({
    queryKey: ["todoList"],
    queryFn: getTodo,
  });
  setTodoItem(data?.data);

  return (
    <>
      <h1>Recoil + React Query</h1>
      {isLoading ? (
        <h1>로딩중~</h1>
      ) : (
        <>
          <div>
            {todoItem?.map((i) => (
              <div key={i.id}>{i.title}</div>
            ))}
          </div>
          <ChidrenComponent />
        </>
      )}
    </>
  );
}
export default App;
