function changeImage(imageType) {
  var imgElement = document.getElementById("displayed-image");
  var pElement = document.getElementById("image-description");

  if (imageType === "Unisa logo") {
    imgElement.src = "images/logo.png";
    imgElement.alt = "logo of UniSA";
    pElement.innerHTML =
      'The official logo of the University of South Australia,<a href="https://commons.wikimedia.org/wiki/File:Logo-unisa-portrait-blue.svg" target="_blank">here</a>';
  } else if (imageType === "Usasa Logo") {
    imgElement.src = "images/usasa_logo.png";
    imgElement.alt = "Logo of USASA";
    pElement.innerHTML =
      'The official logo of the University of South Australia Student Association <a href="https://studentexperiencenetwork.com.au/wp-content/uploads/1632189955-499449981-USASA_logo_webresolution.png" target="_blank">here</a>.';
  }
}
