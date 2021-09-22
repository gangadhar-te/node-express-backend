function log(req,res,next) {
    console.log('custom middleware called');
    next();
};

module.exports = log;