"use strict";

function Homepage() {
  return (
    <div>
      <h3>Welcome!</h3>
      <a href="/cards">Go to cards</a>
      <img id="balloonicorn-img" src="/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
