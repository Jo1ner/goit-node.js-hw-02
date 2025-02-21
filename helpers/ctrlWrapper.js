const ctrlWrapper = (foo) => {
  const func = async (req, res, next) => {
    try {
      await foo(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

module.exports = ctrlWrapper;
