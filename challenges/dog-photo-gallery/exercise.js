const fetchApi = "https://dog.ceo/api/breeds/image/random";
const buttonForImage = document.getElementById("newImage");
const dogList = document.getElementById("newDogList");

function displayImage(imageLink) {
  let newList = document.createElement("li");
  dogList.append(newList);

  let dogImg = document.createElement("img");
  dogImg.src = imageLink;
  newList.append(dogImg);
}

function getPictureData() {
  fetch(fetchApi)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw `${response.status}${response.statusText}`;
    })
    .then((data) => {
      console.log(data);
      let src = data.message;
      displayImage(src);
    })
    .catch((error) => {
      console.log("an error happened:", error);
    });
}

buttonForImage.addEventListener("click", getPictureData);
