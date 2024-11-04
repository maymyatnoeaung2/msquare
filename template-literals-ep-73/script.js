const bodyTag = document.getElementsByTagName("body")[0];
const country = "Myanmar";

bodyTag.innerHTML = ` <div class="wrapper">
<h1 class="text">Hello World</h1>
</div>
<div class="welcomeText">
<div class="text">Welcome to ${country}</div>
</div>`;
