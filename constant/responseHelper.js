function sendResponse(res,code, flag, msg, data = []) {
    res.status(code).json({
      status: flag,
      msg: msg,
      data: data,
    });
  }
  
  module.exports = sendResponse;
  