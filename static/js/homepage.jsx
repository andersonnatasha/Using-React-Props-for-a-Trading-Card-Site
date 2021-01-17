"use strict";

function Homepage() {
  return (
    <div>
    <h3> Hi there, thanks for showing up! You can find all the cards <a href="/cards">here!</a> </h3>
    <img src="/static/img/balloonicorn.jpg"></img>
    </div>

);
}



ReactDOM.render(<Homepage />, document.querySelector('#app'));
