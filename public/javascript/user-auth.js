const checkAuth = () => {
  const token = sessionStorage.getItem("userdata")
    ? JSON.parse(sessionStorage.getItem("userdata")).token
    : null;
  if (!token) {
    window.location.href = "/";
    return;
  }
};

checkAuth();
