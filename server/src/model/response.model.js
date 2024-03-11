const messages = {
  200: 'success',
  300: 'redirection',
  400: 'bad request',
  401: 'unauthorize',
  404: 'not found',
  500: 'internal server error',
  501: 'not implemented'
};

class Response {
  status = 0;
  message = '';
  data = null;
  constructor(status = 0, data = null) {
    this.status = status;
    this.message = messages[status];
    this.data = data;
  }
};

module.exports = {
  Response,
}
