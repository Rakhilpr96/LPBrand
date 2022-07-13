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
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImxwdXNlcjMiLCJ1c2VySWQiOiIxMjYxMzMiLCJlbWFpbCI6InVzZXIxMjNAZW1haWwuY29tIiwiaWF0IjoxNjU2NjE2NzE4LCJleHAiOjE2ODgxNTI3MTgsImlzcyI6Imh0dHBzOi8vZXgtYnV5Lmhlcm9rdWFwcC5jb20iLCJzdWIiOiIxMjYxMzMifQ.C3-ldyqJfXlhQzY8YO8ISj1vs23iVCS-Dm2ldt7y_nVTSxEUmRPTpphvrhSLd2qaul1-xRqNJtLt2mfEFHuD0spPmKlBCiHwJMkz7KAVjxu2iN2H8gGOvdr85re5l3cc6Cl4FP23060i9XEiCbf7XWv0sw0KklKDlgQjP_b4qk0awAoq6WZpQs3udmFN7e712mTJFc9wvkuOBgEag2fo2l3PS_TOCVDQbNc_yWWtSYdImZYZRrVFJjnuLNulh-ZPrIDIQazTz3PE1ySYLwlruDJWbIGml1TqjUsUM6jT7cCtYoxaOwS81T-IOuYFFD9QDVn-LE3xJVQCjtRpgoaj-A",
      id: "126133",
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
