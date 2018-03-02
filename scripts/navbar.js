function create_navbar() {
    var d1 = document.getElementById('navbar');
    d1.insertAdjacentHTML('afterbegin',`
    <nav id ="side">
      <button id="close" onclick="close()">&times;</button> 
      <a href="index.html">Home</a>
      <a href="litreview.html">Literature Review</a>
      <a href="worklog.html">Worklogs</a>
      <a href="image.html">Images</a>
      <a href="video.html">Video</a>

      <footer class="footer_sidebar">
      <a href="https://jigsaw.w3.org/css-validator/check/referer">
      <img style="border:0;width:88px;height:31px"
          src="https://jigsaw.w3.org/css-validator/images/vcss"
          alt="Valid CSS!" />
      </a>
      <a href="https://validator.w3.org/check?uri=referer">
          <img style="border:0;width:88px;height:31px"
                src="https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png"
                alt="Valid HTML!" />
      </a>
      </footer>
    </nav>
    `
  );
}

create_navbar();