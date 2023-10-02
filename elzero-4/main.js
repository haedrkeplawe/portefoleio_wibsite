let Title = document.getElementById("text");
let your_thougt = document.getElementById("your_thougt");
let save = document.getElementById("save");

let tasks = document.querySelector(".tasks");
let tmp;

//create product
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}
console.log(dataPro);

save.onclick = () => {
  let newPro = {
    Title: Title.value,
    your_thougt: your_thougt.value,
  };
  if (save.value === "Save") {
    dataPro.push(newPro);
  } else {
    dataPro[tmp] = newPro;
    save.value = "Save";
  }
  console.log(dataPro);
  localStorage.setItem("product", JSON.stringify(dataPro));
  Title.value = "";
  your_thougt.value = "";
  showData();
};

// save2.onclick = () => {
//   localStorage.setItem("product", JSON.stringify(dataPro));
//   dataPro = JSON.parse(localStorage.product);
//   console.log(dataPro);
// };

function showData() {
  if (dataPro.length === 0) {
    tasks.innerHTML = `
        <h2 class="mt-0 mb-20">Latst Tasks</h2>
        <h3 class="mt-0 mb-20">add any text from  Quick Draft :)</h3>
        `;
  } else {
    tasks.innerHTML = `
        <h2 class="mt-0 mb-20">Latst Tasks</h2>
        `;
    for (let i = 0; i < dataPro.length; i++) {
      tasks.innerHTML += `
            <div class="task-row between-flex">
                <div class="info">
                    <h3 class="mt-0 mb-5 fs-15">${dataPro[i].Title}</h3>
                    <p class="m-0 c-grey">${dataPro[i].your_thougt}</p>
                </div>
                <i  onclick="updateData(${i})" class="fa-regular fa-edit updateData"></i>
                <i  style="margin-left: 0.6rem;"  onclick="deleteData(${i})" class="fa-regular fa-trash-can delete"></i>
            </div>`;
    }
  }
}
showData();

//delete
function deleteData(i) {
  dataPro.splice(i, 1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
}

//update
function updateData(i) {
  Title.value = dataPro[i].Title;
  your_thougt.value = dataPro[i].your_thougt;
  save.value = "update";
  tmp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}
