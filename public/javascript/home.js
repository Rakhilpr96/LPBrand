const onLogout = () => {
  sessionStorage.removeItem("userdata");
  window.location.href = "/";
};

lpTag.section = ["Home Page"];
