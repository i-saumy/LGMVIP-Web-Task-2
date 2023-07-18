const getUsersBtn = document.getElementById("getUsersBtn");
const loader = document.getElementById("loader");
const userGrid = document.getElementById("userGrid");

getUsersBtn.addEventListener("click", getUsers);

function getUsers() {
  showLoader();
  fetch("https://reqres.in/api/users?page=1")
    .then(response => response.json())
    .then(data => {
      hideLoader();
      displayUsers(data.data);
    })
    .catch(error => {
      hideLoader();
      console.error("Error fetching users:", error);
    });
}

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display ="none" ;
}

function displayUsers(users) {
  userGrid.innerHTML = "";
  users.forEach(user => {
    const card = createUserCard(user);
    userGrid.appendChild(card);
  });
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.className = "user-card";
  card.innerHTML = `
    <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
    <h3>${user.first_name} ${user.last_name}</h3>
    <p>Email: ${user.email}</p>
  `;
  return card;
}
