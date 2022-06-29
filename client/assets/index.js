const dataContainer = document.querySelector(".results-container");

const displayData = function (mov) {
  mov.forEach((mov, i) => {
    const html = ` <div class="result-link-container"><a class="result-link" href="${data.address}"></a></div>
        <div class="result-title-container">
          <p class="result-desc"><a class="result-link" href="${data.address}"></a></p>${data.link}</p>
        </div>
        <div class="result-info-container"><p class="result-info">${data.info}</p></div>`;

    dataContainer.insertAdjacentHTML("afterbegin", html);
  });
};

displayData(data);
