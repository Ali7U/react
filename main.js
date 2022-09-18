let container = document.getElementById("hello");

let element = (
  <div className="info">
    <div className="title">
      <h2>Information About Me!</h2>
    </div>

    <div className="about">
      <h4>My name is Ali Ibrahim Al-Guaideb</h4>
      <h4>My age is 22</h4>
      <h4>I study at the College of Communication and Information</h4>
      <h4>My major is Software engineering</h4>
    </div>
    <div className="secoundAbout">
      <h4>I use Backend using Node.js</h4>
      <h4>I learn now Frontend using React.js</h4>
      <img src="https://miro.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png"></img>
      <img src="https://hermes.digitalinnovation.one/tracks/673c85f4-a1cb-40b7-a6fd-7f9becb379f6.png"></img>
      <img src="https://expressjs.com/images/express-facebook-share.png"></img>
      <br></br>
      <img src="https://i.ytimg.com/vi/hjfv3b03Rj8/maxresdefault.jpg"></img>
    </div>
  </div>
);

ReactDOM.render(element, container);
