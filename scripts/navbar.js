function create_navbar() {
    var d1 = document.getElementById('navbar');
    d1.insertAdjacentHTML('afterbegin',`
    <div class="sidenav">
      <a href="index.html">Home</a>
      <a href="litreview.html">Litreview</a>
      <a href="worklog.html">Worklogs</a>
      <a href="video.html">Video</a> 
    </div>`
  );
}

create_navbar();