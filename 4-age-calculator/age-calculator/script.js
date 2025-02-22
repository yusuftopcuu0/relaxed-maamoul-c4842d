// Input içindeki texxt anlık tarih olur.
function setTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Ay 0'dan başlar, bu yüzden +1 ekliyoruz
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`; // YYYY-MM-DD formatına çevir
  document.getElementById("infoInput").value = formattedDate;
  document.getElementById("infoInput").max = formattedDate;
}

setTodayDate();

//

const dateInput = document.querySelector("#infoInput");
let date = new Date();
dateInput.addEventListener("input", function () {
  date = dateInput.value;
  console.log("Selected Date:", dateInput.value); // inputtaki değeri logla
});

const calcButton = document.querySelector("button");
// Butona tıklanınca çalışan fonksiyon
calcButton.addEventListener("click", function () {
  // Doğum tarihini inputtan al
  const selectedDate = new Date(date); // "date" bir input olmalı
  const today = new Date();

  // Doğum tarihi ile bugünün farkını hesapla
  let age = today.getFullYear() - selectedDate.getFullYear();
  const monthDiff = today.getMonth() - selectedDate.getMonth();

  // Eğer doğum günü bu yıl henüz gelmediyse yaşı bir azalt

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < selectedDate.getDate())
  ) {
    age--;
  }

  // Sonucu konsola yazdır
  console.log("Doğum Tarihi:", selectedDate);
  console.log("Bugün:", today);
  console.log("Yaşınız:", age);

  function replaceItem() {
    const firstItem = document.getElementById("entTitle");

    const h2 = document.createElement("h2");
    h2.textContent = `Your age is ${age} years old`;

    firstItem.replaceWith(h2);
  }
  replaceItem();
});
