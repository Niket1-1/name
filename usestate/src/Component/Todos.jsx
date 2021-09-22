import React, { useEffect, useState } from "react";

const Todos = () => {
  const [text, settext] = useState("");
  const [todolist, settodolist] = useState([]);

  useEffect(() => {
    gettodos();
  }, []);

  const gettodos = () => {
    fetch("http://localhost:8000/todos")
      .then((data) => data.json())
      .then((data) => {
        console.log("todos", data);
        settodolist(data);
      });
  };

  return (
    <>
      <input
        placeholder="Add todos"
        value={text}
        onChange={(e) => {
          settext(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          const data = {
            title: text,
            status: false,
          };

          fetch("http://localhost:8000/todos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            },
          }).then(() => {
            gettodos();
            settext("");
          });
        }}
      >
        Add tod
      </button>

      {todolist.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}
    </>
  );
};

export default Todos;
