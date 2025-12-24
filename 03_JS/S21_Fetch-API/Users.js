// async function fnGetUsersData() {
//   var ol = document.querySelector("ol");
//   try {
//     const data = await fetch("https://randomuser.me/api/?results=50");
//     const finalData = await data.json();
//     console.log(finalData.results);
//     finalData.results.forEach(function (user) {
//       var li = document.createElement("li");
//       li.textContent = user.name.first;
//       ol.appendChild(li);
//     });
//   } catch (error) {
//     alert("Something went wrong");
//   }
// }

async function fnGetUsersData() {
  var tbody = document.querySelector("tbody");
  try {
    const data = await fetch("https://randomuser.me/api/?results=10");
    const finalData = await data.json();
    console.log(finalData.results);
    finalData.results.forEach(function (user) {
      //create a tr
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var img = document.createElement("img");
      img.width = "50";
      img.height = "50";
      img.src = user.picture.medium;
      td1.appendChild(img);
      td2.textContent = user.name.first;
      td3.textContent = user.gender;
      td4.textContent = user.email;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      tbody.appendChild(tr);
    });
  } catch (error) {
    alert("Something went wrong");
  }
}
