const checkAuth = () => {
  const token = sessionStorage.getItem("userdata")
    ? JSON.parse(sessionStorage.getItem("userdata")).token
    : null;
  if (token) {
    window.location.href = "home.html";
    return;
  }
};

lpTag.sdes.push({
  type: "ctmrinfo", //MANDATORY
  info: {
    cstatus: `Visitor Page :${document.title}`, //CUSTOMER LIFECYCLE STATUS. FROM PRE-DEFINED LIST
  },
});

// Remove in production
document.getElementById("email").value = "user@email.com";
document.getElementById("password").value = "1234";
// END

checkAuth();

const onLogin = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email == "user@email.com" && password == "1234") {
    const response = {
      httpStatus: "OK",
      token:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImxwdXNlcjAiLCJ1c2VySWQiOiIxMjYxMzAiLCJlbWFpbCI6InVzZXIxMjBAZW1haWwuY29tIiwiaWF0IjoxNjU2NjE2NzE4LCJleHAiOjE2ODgxNTI3MTgsImlzcyI6Imh0dHBzOi8vZXgtYnV5Lmhlcm9rdWFwcC5jb20iLCJzdWIiOiIxMjYxMzAifQ.Om-72nHSquTIJPbSJ0IMueWRTx8H8ks5BaZDxewpdY4yYyFS987mbZJY5C4bFsWSxo33yIVfsngWERzHloXqsostdR3BGmEZ3_AM14gxcJsn2RYHANKDaKjZc2d9S255aEp4w5SX-Z5QMMAmYMDw5FAl8uZ3KUaWjXlGwHKAzwm7xME2jNElIOYgFc1h-sBvcGGnaKKHHAEVWBpPJ_Na8dwYYgjA4d-T09dZPRJdAcsDtNNB4RlIrG7RaIyUOBrD9RNAtnakncJAtXj_juep0YqiTFJMdSDVqjQ5HdAoD7dJNISo9j2_hiRgjbIdJB7plvKgeZ0sf31zNHEwEptY6Q",
      id: "126130",
      iss: "https://ex-buy.herokuapp.com",
    };
    sessionStorage.setItem("userdata", JSON.stringify(response));
    window.location.href = "home.html";
  } else {
    alert(
      "Invalid username or password. \nHint : email : 'user@email.com', password : '1234'"
    );
  }
};
