function createServer(name) {
  const uid = firebase.auth().currentUser.uid;

  return firebase.firestore()
    .collection("servers")
    .add({
      name,
      owner: uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
}
