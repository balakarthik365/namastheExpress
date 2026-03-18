const checkUserAuthorization = (req, res, next) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  const isAuthorized = token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  if (!isAuthorized) {
    console.log("UnAuthorized User.");
    res.status(401).send("unAuthorized User.");
  } else {
    next();
  }
};
const checkAdminAuthorization = (req, res, next) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  const isAuthorized = token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  if (!isAuthorized) {
    console.log("UnAuthorized User.");
    res.status(401).send("unAuthorized User.");
  } else {
    next();
  }
};
module.exports = {
  checkUserAuthorization,
  checkAdminAuthorization,
};
