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
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImxwdXNlcjEiLCJ1c2VySWQiOiIxMjYxMzEiLCJlbWFpbCI6InVzZXIxMjFAZW1haWwuY29tIiwiaWF0IjoxNjU2NjE2NzE4LCJleHAiOjE2ODgxNTI3MTgsImlzcyI6Imh0dHBzOi8vZXgtYnV5Lmhlcm9rdWFwcC5jb20iLCJzdWIiOiIxMjYxMzEifQ.kssNhG5l1vG62YLTyYtTPV2JlflfIVNkgzJmBdLGf8a08Q-_2FG-3CKCHAgWtYLySctuPKxbUPqKXYkIyirjnfrY65GIgemVPncdoa8jfv78Cr0800DxcveHR8sFya1NutmHszG7X-Vxpwu71cewpNJqKAmvWZ3IWvaXAjw_ZmIB34-KdisYl3wl6PMM3GppJL7fETMxVWPshyHVoLbsw4OXKmZmPKz75xzCS2FCmhzxaqqkZhyo0rk4LbLv0oE4XGoXSyflk0EYxGMR0LqUd_mCGp1zQhu680_tKz-l0-PxqI4dNkNvJ8wJoKhCwpAgYg3l0BrEsEmYGZiTJSn2Aw",
      id: "126131",
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
