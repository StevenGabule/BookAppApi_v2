export default class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
    this.count = 0;
  }
  setSuccess(statusCode, message, data, count) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = "success";
    this.count = count;
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = "error";
  }

  send(res) {
    const result = {
      status: this.type,
      count: this.count,
      message: this.message,
      data: this.data,
    };
    if (this.type === "success") {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
    });
  }
}
