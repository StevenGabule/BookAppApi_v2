import db from "../src/models";

const User = db.User;

export const checkDuplicateEmail = (req, res, next) => {
  // check for email duplication
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! email is already in used!",
      });
      return;
    }
    next();
  });
};
