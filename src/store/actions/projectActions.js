export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to db
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "PlaceholderGuy",
        authorLastName: "Last Name",
        authorId: 1235,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project
        })
      })
      .catch( (error) => {
          dispatch({ type: 'CREATE_PROJECT_ERROR', error})
      })
  };
};
