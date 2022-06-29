const dataContainer = document.querySelector(".results-container");

const form = document.querySelector(".btn-test");
const link = document.querySelector(".link");
const desc = document.querySelector(".desc");

function searchResult(e) {
  e.preventDefault();
  fetch("http://localhost:3000/searchresults")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((el, i) => {
        const html = ` <div class="result-box"> <div class="result-link-container"><a class="result-link" href="${data[i].address}">${data[i].address}</a></div>
          <div class="result-title-container">
            <p class="result-desc"><a class="result-link" href="${data[i].address}">${data[i].link}
            </a></p>
          </div>
          <div class="result-info-container"><p class="result-info">${data[i].info}</p></div></div>`;

        dataContainer.insertAdjacentHTML("afterbegin", html);
      });
    });
}

form.addEventListener("submit", (e) => searchResult(e));
