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
function createChannel(serverId, name) {
  return firebase.firestore()
    .collection("servers")
    .doc(serverId)
    .collection("channels")
    .add({
      name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    }function sendMessage(serverId, channelId, content) {
  const uid = firebase.auth().currentUser.uid;

  return firebase.firestore()
    .collection("servers")
    .doc(serverId)
    .collection("channels")
    .doc(channelId)
    .collection("messages")
    .add({
      author: uid,
      content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    }
