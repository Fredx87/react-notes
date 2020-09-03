import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { Button } from "../../components/Button";
import { deleteNote, notesSelectors } from "./notesSlice";

export const NotesList = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const notes = useSelector(notesSelectors.selectAll);

  const createNewNote = () => {
    history.push(`${url}/create`);
  };

  const onDelete = (id: string) => {
    if (window.confirm("Are your sure that you want to delete the note?")) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div>
      <div className="text-right mb-6">
        <Button variant="primary" onClick={createNewNote}>
          Create
        </Button>
      </div>
      <div className="flex flex-wrap -mx-2">
        {notes.map((note) => (
          <div key={note.id} className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
            <div className="rounded shadow-lg p-6 space-y-3">
              <div className="space-y-1">
                <div className="text-gray-600 text-sm">
                  {new Date(note.timestamp).toLocaleString()}
                </div>
                <h2 className="text-xl font-bold">{note.title}</h2>
              </div>
              <p className="whitespace-pre-line">{note.content}</p>
              <div className="text-right space-x-2">
                <Link
                  to={`${url}/${note.id}/edit`}
                  className="text-green-500 underline focus:outline-none"
                >
                  Edit
                </Link>
                <Button
                  variant="link"
                  onClick={() => {
                    onDelete(note.id);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
