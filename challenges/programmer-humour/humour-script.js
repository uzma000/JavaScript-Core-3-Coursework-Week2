// let image = document.createElement("image");
// let heading = document.createElement("h1");
// image.src = "";
// main.appendChild(image);

function imageList() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw `${response.status}${response.statusText}`;
    })
    .then((data) => {
      console.log(data);
      let title = document.createElement("h1");
      title.innerHTML = data.title;
      title.className = "title";
      let main = document.getElementById("main-body");
      main.appendChild(title);
      let image = document.createElement("image");
      image.setAttribute("src", data.image);
      image.className = "image";

      main.appendChild(image);
    })
    .catch((error) => console.log(error));
}

window.onload = imageList;
