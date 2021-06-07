import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScript framework",
  },
  { title: "Why use React?", content: "React is a favorite JS library." },
  {
    title: "How to use React?",
    content: "By building out components",
  },
];

export default () => {
  return (
    <div>
      <br />
      <Accordion items={items} />
    </div>
  );
};
