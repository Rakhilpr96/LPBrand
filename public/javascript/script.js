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
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImxwdXNlcjQiLCJ1c2VySWQiOiIxMjYxMzQiLCJlbWFpbCI6InVzZXIxMjRAZW1haWwuY29tIiwiaWF0IjoxNjU2NjE2NzE4LCJleHAiOjE2ODgxNTI3MTgsImlzcyI6Imh0dHBzOi8vZXgtYnV5Lmhlcm9rdWFwcC5jb20iLCJzdWIiOiIxMjYxMzQifQ.G3-7ZlkYVHCwtoB0RU8XVpJ1mGNqxZUaWzVp-Qtslg7SfbjpxHU4v4jMjVDvsLRnm26zeLwUjROHXyNjg-V-v2jVP8uJpITIkxfyX1bZfKt2NF_RB-h0u3hlfsFBEu2qYxQNKpk0PjUuyR7sX8f4dLXuYmtlRjFZe923zyF3NDvw3o1CUAghJKEkSwqPtwEgf_U04TsVgTDkVidnIVUtKC6L88XUJqjkAhgusaiikOpObBhVIMDi3-AozOyqnrVlQtuY7kjRKigC9SwksXDywZDr4auSMs64O7L4p5tk9cqxbEldNtdAuu4GJA6H6w9NQhufL2UTJgzbAOs2PYD0PA",
      id: "126134",
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
