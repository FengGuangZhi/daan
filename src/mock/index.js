let Mock = require("mockjs");
Mock.mock("/api/count", "post", function (config) {
  let con = JSON.parse(config.body);
  if (con.name == "admin" && con.psd == "123456") {
    return {
      status: 200,
      res: "message",
    };
  } else {
    return {
      status: 200,
      res: "error",
    };
  }
});
