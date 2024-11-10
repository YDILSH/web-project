function changeImage(imageType) {
  var imgElement = document.getElementById("displayed-image");
  var pElement = document.getElementById("image-description");

  if (imageType === "logo") {
    imgElement.src = "images/logo.png";
    imgElement.alt = "logo of UniSA";
    pElement.innerHTML =
      'The official logo of the University of South Australia,<a href="https://commons.wikimedia.org/wiki/File:Logo-unisa-portrait-blue.svg" target="_blank">here</a>';
  } else if (imageType === "modern architecture") {
    imgElement.src = "images/modern architecture.png";
    imgElement.alt = "modern architecture of UniSA";
    pElement.innerHTML =
      ': A photograph showcasing the modern architecture of the University of South Australia <a href="https://commons.wikimedia.org/wiki/File:University_of_South_Australia,_School_of_Mines,_North_Terrace,_Adelaide,_South_Australia.jpg" target="_blank">here</a>.';
  }
}
