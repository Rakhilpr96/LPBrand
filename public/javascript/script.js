const checkAuth = () => {
  const token = sessionStorage.getItem("userdata")
    ? JSON.parse(sessionStorage.getItem("userdata")).token
    : null;
  if (token) {
    window.location.href = "home.html";
    return;
  }
};

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
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImxwdXNlcjIiLCJ1c2VySWQiOiIxMjU3IiwiZW1haWwiOiJ1c2VyMkBlbWFpbC5jb20iLCJpYXQiOjE2NTY1ODAzNjMsImV4cCI6MTY4ODExNjM2MywiaXNzIjoiaHR0cHM6Ly9leC1idXkuaGVyb2t1YXBwLmNvbSIsInN1YiI6IjEyNTcifQ.iBfIecIqhU0x9WdiKU2HG1j6Wp37xqqE-lMam_T-PZEmEYHLrXkQWPvJ6EMVfzCv-Ap6cmCvQimD5LK9x8kveZcvA7dO-sFO8i4rBSipkyDUi5GCuU0nVqkMLDVJFTB5Me2S3PxcvuOdKrdWmKRRj4Op-xG-BvjXcAiaXJLbV89k_0M5JOKx1WRSJoeKm-VKscJmP-u2MgM48jlkIgE6h3ysjqlOMYiWojRoQQ_ZGccKHQQmUAM5gwN2MI_PGD7geoQ21DdcQyHMK0pzmsApezmUAvQA3qYIt1eO2HNdTqeIvtiPRkKf520RYC0M649W04_lp7OpQyRUAyTYz6G3tA",
      id: "1257",
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
