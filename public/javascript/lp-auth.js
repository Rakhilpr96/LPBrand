lpTag.identities = [];
lpTag.identities.push(identityFn);
function identityFn(callback) {
  const user = JSON.parse(sessionStorage.getItem("userdata"));
  if (user) {
    callback({
      iss: user.iss,
      acr: "loa1",
      sub: user.id,
    });
  } else {
    callback(null);
  }
}
