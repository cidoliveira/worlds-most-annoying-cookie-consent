const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");
const modalInnerLoading = setTimeout(function () {
  modal.style.display = "inline";
}, 3000);

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`;
  const uploadText = document.querySelector("#uploadText");
  setTimeout(function () {
    uploadText.innerText = "Making the sale...";
  }, 1500);
});
