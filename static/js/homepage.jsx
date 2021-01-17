"use strict";

function Homepage() {
  return (
    <React.Fragment>
    <h3> Hi there, thanks for showing up! You can find all the cards <a href="/cards">here!</a> </h3>
    <img id="homepage-balloonicorn" src="/static/img/balloonicorn.jpg"/>
    </React.Fragment>

);
}



ReactDOM.render(<Homepage />, document.querySelector('#app'));
