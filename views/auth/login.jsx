var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div className="container">
            <div className="row">
              <div className="col mt-5">
                <h3>
                  <u>TWEEDR: Authentication</u>
                </h3>
                <br></br>
                <p className="text-danger">
                  <em>{this.props.comments}</em>
                  <br></br>
                </p>
                <div className="row">
                  <div className="col-6">
                    <h5 className="mb-3">NEW USERS:</h5>
                    <a href="/register" className="btn btn-info">
                      Register Here!
                    </a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                  <div className="col-6">
                    <form method="POST" action="/home">
                      <h5 className="mb-3">EXISTING USERS:</h5>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="form-control"
                      />
                      <br></br>
                      <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                      />
                      <br></br>
                      <input
                        className="btn btn-primary"
                        type="submit"
                        value="Login"
                      />
                      <br></br>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
      </html>
    );
  }
}

module.exports = Login;
