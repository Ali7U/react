let container = document.getElementById("hello");

let element = (
  <div className="info">
    <h2>Information About Me!</h2>
    <h4>My Name is Ali Al-Guaideb</h4>
    <h4>My age is 22</h4>
    <h4>I'm Syudying in Communaction and Information Coallege</h4>
    <img
      className="img"
      src="https://play-lh.googleusercontent.com/G-R3hpPdMYzyS4pJ4Wpht1dYD3i-Kk9B9ZoHbV84E0OpdGIZpjBdVqwp93w-w_v3iJ0"
    ></img>
  </div>
);

ReactDOM.render(element, container);
