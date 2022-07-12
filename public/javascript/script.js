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
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImxwdXNlcjIiLCJ1c2VySWQiOiIxMjYxMzIiLCJlbWFpbCI6InVzZXIxMjJAZW1haWwuY29tIiwiaWF0IjoxNjU2NjE2NzE4LCJleHAiOjE2ODgxNTI3MTgsImlzcyI6Imh0dHBzOi8vZXgtYnV5Lmhlcm9rdWFwcC5jb20iLCJzdWIiOiIxMjYxMzIifQ.nNqz8dKDtOwWrEVIhugw70DCXnMH7hxYkRnzv-q44YByXQGZ2znqjly5lB0_qyuFBjvGYfA9CvzTh-UE3nJ-iM_nax2OABlHj6SLk_0M8vYXIrmGfH6RD42a1i52m92FmyN2UToh2dyzzT7f3LpCuEWs2MdyIhkDyx9LDeM03W9s6-uloy375tsx7DwDFDLS8DXCRvRmFP2gJJO0rOA6-sDtkhC6d6zEukED0_2ot0IXirWTfzDmz5-1rZW9B_b-O1hH0tir94Ty85TYxr-ZbZQ7NBPDqRjhScFGy4Y3XwBjsB2olOrxUW9xV4XXauPcPIX3R-9dKyL1yTuXH6rvYw",
      id: "126132",
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
