"use client";
// KuduList.tsx
import React, { useState } from "react";
import useKuduStore from "@/store/KudusStore";
import styles from "@/styles/style.module.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const KuduList: React.FC = () => {
  const kudus = useKuduStore((state) => state.kudus);
  const addKudu = useKuduStore((state) => state.addKudu);
  const removeKudu = useKuduStore((state) => state.removeKudu);
  const updateKudu = useKuduStore((state) => state.updateKudu);
  const editKudu = useKuduStore((state) => state.editKudu);

  const [newKudu, setNewKudu] = useState<string>("");
  const [editText, setEditText] = useState<string | null>(null);
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddKudu = () => {
    if (newKudu.trim() !== "") {
      // Check if input is not empty or whitespace
      const kudu = { id: Date.now(), text: newKudu, completed: false };
      addKudu(kudu);
      setNewKudu("");
    }
  };

  const handleRemoveKudu = (id: number) => {
    removeKudu(id);
    resetEdit();
  };

  const handleToggleComplete = (id: number) => {
    const updatedKudu = kudus.find((kudu) => kudu.id === id);
    if (updatedKudu) {
      updatedKudu.completed = !updatedKudu.completed;
      updateKudu(updatedKudu);
    }
  };

  const handleEditStart = (id: number, text: string) => {
    setEditText(text);
    setEditId(id);
  };

  const handleEditSave = () => {
    if (editId !== null && editText !== null && editText.trim() !== "") {
      // Check if input is not empty or whitespace
      editKudu(editId, editText);
      resetEdit();
    }
  };

  const resetEdit = () => {
    setEditText(null);
    setEditId(null);
  };

  return (
    <div className="Custom__Container">
      <div className="Custom__Todo">
        <div className="Custom__Space">
          <h1>Todo App</h1>
          <input
            type="text"
            required
            maxLength={15}
            minLength={2}
            value={newKudu}
            onChange={(e) => setNewKudu(e.target.value)}
          />
          {/*<input type="number" min={2} max={7} />*/}
          <button onClick={handleAddKudu} className="neumorphic__button">
            Add
          </button>
        </div>
        <div className="">
          <table className={styles["table"]}>
            <thead>
              <tr>
                <th>completed</th>
                <th>id</th>
                <th>todo</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {kudus.map((kudu) => (
                <tr key={kudu.id}>
                  {editId === kudu.id ? (
                    <>
                      <td colSpan={5}>
                        {" "}
                        {/* Adjust the colspan based on the number of columns in your table */}
                        <input
                          type="text"
                          // @ts-ignore
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="Custom__EditInput"
                        />
                        <button
                          className="neumorphic__button"
                          onClick={handleEditSave}
                        >
                          Save
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className={`${kudu.completed ? 'Yes' : 'No'}`}>{`${kudu.completed}`}</td>
                      <td>{kudu.id}</td>
                      {/* <td>{kudu.text}</td> */}
                      <td
                        style={{
                          textDecoration: kudu.completed
                            ? "line-through"
                            : "none",
                        }}
                        onClick={() => handleToggleComplete(kudu.id)}
                      >
                        {kudu.text}
                      </td>
                      <td>
                        <button
                          className="neumorphic__button"
                          onClick={() => handleEditStart(kudu.id, kudu.text)}
                        >
                          <EditNoteIcon />
                        </button>
                      </td>
                      <td>
                        {/*<input value={newText} onChange={e => setNewText(e.target.value)} />*/}
                        <button
                          className="neumorphic__button"
                          // @ts-ignore
                          onClick={() => handleRemoveKudu(kudu.id)}
                        >
                          <DeleteForeverIcon />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KuduList;
