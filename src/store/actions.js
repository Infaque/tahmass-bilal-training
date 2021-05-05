export const addNote = (note) => {
  return {
    type: "ADD_NOTE",
    note,
  };
};

export const removeNote = (id) => {
  return {
    type: "REMOVE_NOTE",
    id,
  };
};
export const addNewNote = (note) => {
  return async (dispatch) => {
    dispatch(addNote(note));
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    dispatch(removeNote(id));
  };
};
