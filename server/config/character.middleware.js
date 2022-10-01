const characterMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      id: req.id,
      bestSentences: req.bestSentences,
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/bestSentences') {
    characterMiddleware(req, res, next);
  } else {
    next();
  }
};
