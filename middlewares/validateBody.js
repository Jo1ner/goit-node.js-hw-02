const { HttpError } = require("../helpers");

const validateBody = (scheme) => {
  const func = (res, req, next) => {
    const { error } = scheme.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
