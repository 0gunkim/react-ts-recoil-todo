import { atom } from "recoil";

export const todoItemData = atom({
  key: "todoItem",
  default: [{ id: 0, title: "" }],
});
