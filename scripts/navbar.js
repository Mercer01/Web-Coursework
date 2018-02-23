function create_navbar() {
    var d1 = document.getElementById('navbar');
    d1.insertAdjacentHTML('afterbegin',`
    <div id ="side" class="sidenav">
      <button id="close" onclick="close()">&times;</button> 
      <a href="index.html">Home</a>
      <a href="litreview.html">Literature Review</a>
      <a href="worklog.html">Worklogs</a>
      <a href="video.html">Video</a>
      <footer class="footer_sidebar">
        <a href="https://goo.gl/v4Wr81">
            <img id=w3c
                src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
                alt="Valid CSS!" />
        </a>
          <a href="https://validator.w3.org/check?uri=referer">
              <img style="border:0;width:88px;height:31px"
                    src="https://www.w3.org/Icons/valid-html401-blue"
                    alt="Valid HTML!" />
        </a>
</footer>
      </footer>
    </div>
    `
  );
}

create_navbar();