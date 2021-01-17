"use strict";

function Homepage() {
  return (
    <div>
      <h3 class="homepage-text">Welcome!</h3>
      <img id="balloonicorn-img" src="/static/img/balloonicorn.jpg"></img>
      <a class="homepage-text href="/cards">Go to cards</a>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
