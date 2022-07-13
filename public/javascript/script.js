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
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImxwdXNlcjUiLCJ1c2VySWQiOiIxMjYxMzUiLCJlbWFpbCI6InVzZXIxMjVAZW1haWwuY29tIiwiaWF0IjoxNjU2NjE2NzE4LCJleHAiOjE2ODgxNTI3MTgsImlzcyI6Imh0dHBzOi8vZXgtYnV5Lmhlcm9rdWFwcC5jb20iLCJzdWIiOiIxMjYxMzUifQ.EQ6lwiJWNOE9Kv9LY6at9A3GHYDpq8H1mI0540JpLdZ5wwv_O05PRLfL0hLJMIcNHF-p5LmUcV7Ad9z12UQki6NfiWxLogcOBr3A1gyQu5dRwBI9LufigaJEKlRw3S8n7lI1LHnrfLQg4lc8oizepfQnqtfvPfD-WesvwUdjvmKCOXCqrCgiz8uBjUqvXyfy9ujYIDZ1ggOPaMHs2Ku2sMl7FNJz__vO1FrD5kIXSiX7--vCvqaGlEzwx_IUbk7rT8XhkpWjRHbtXPoVdZXIhWpuQ8SQfWVY6hJGz9MNgdeJQIKr2Oo6z12ZRm6kEJXw-dEY0nmy5Dru9-EN6yipCA",
      id: "126135",
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
