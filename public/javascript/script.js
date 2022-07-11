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
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImxwdXNlcjMiLCJ1c2VySWQiOiIxMjU4IiwiZW1haWwiOiJ1c2VyOEBlbWFpbC5jb20iLCJpYXQiOjE2NTY2MTE0NzQsImV4cCI6MTY4ODE0NzQ3NCwiaXNzIjoiaHR0cHM6Ly9leC1idXkuaGVyb2t1YXBwLmNvbSIsInN1YiI6IjEyNTgifQ.ROZE2nUyjCetdDzgOF-OlDbKenAN45JR8adefJD99VxFnYdggtQeErZRZR_03IoEkc0ICKNBA05yGeHr9yU1xNoSaVM5y3FYH88Nl7c8Nsjm90D1h4rxtKz_r2698lwYPesdHc4jy-WujU23Vw8SCSxuyt-BkS_eLi75VHNcYnGFTZWz2F4v-SkqzRo_GrawuJdKR0qab5vnnXXy5y3mpv0qwFnZJP6h2FMimBJDMIPPrrOtz4njedYhpV71Fsv4ZvUc4EWJFJS8VLwHWud6ZqMWgNh7il4WcqxT5XTgyGiP0D63ZKXMG-EJ6xwVRjvK9StsCnrwQOEOtEFG3dbh3w",
      id: "1258",
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
