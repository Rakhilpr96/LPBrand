const onLogout = () => {
  sessionStorage.removeItem("userdata");
  window.location.href = "/";
};

lpTag.sdes.push({
  type: "ctmrinfo", //MANDATORY
  info: {
    cstatus: `Visitor Page :${document.title}`, //CUSTOMER LIFECYCLE STATUS. FROM PRE-DEFINED LIST
  },
});
