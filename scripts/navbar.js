function create_navbar() {
    var d1 = document.getElementById('navbar');
    d1.insertAdjacentHTML('afterbegin',`
    <div id ="side" class="sidenav">
      <button id="close" onclick="close()">Close &times;</button> 
      <a href="index.html">Home</a>
      <a href="litreview.html">Literature Review</a>
      <a href="worklog.html">Worklogs</a>
      <a href="video.html">Video</a>
      <p class="footer_sidebar">
        <a href="https://goo.gl/v4Wr81">
            <img id=w3c
                src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
                alt="Valid CSS!" />
          </a>
        </p>
    </div>
    `
  );
}

create_navbar();