function populateUsersTable(pageNumber = 1) {
  let url = `https://reqres.in/api/users?page=${pageNumber}`;

  fetch(url)
    .then((res) => res.json())
    .then((users) => {
      console.log(users);

      let userRows = users.data.map(userToRowTemplate).join("");
      document.querySelector("#usersTable tbody").innerHTML = userRows;

      // add the "click" event listener to the newly created rows
      document.querySelectorAll("#usersTable tbody tr").forEach((row) => {
        row.addEventListener("click", (e) => {
          let clickedId = row.getAttribute("id");
          console.log(clickedId);

          fetch(`https://reqres.in/api/users/${clickedId}`)
            .then((res) => res.json())
            .then((user) => {
              let userModal = `
              <strong>User ID:</strong> ${user.data.id}<br />
              <strong>Full Name:</strong> ${
                user.data.first_name + " " + user.data.last_name
              }<br />
              <strong>Avatar:</strong> <img src="${
                user.data.avatar
              }" height=200><br />
              <strong>Email:</strong> ${user.data.email}<br />
          `;
              // console.log("commentsList:", commentsList);
              document.querySelector("#usersModal .modal-body").innerHTML =
                userModal;

              let modal = new bootstrap.Modal(
                document.getElementById("usersModal"),
                {
                  backdrop: "static",
                  keyboard: false,
                }
              );
              modal.show();
            });
        });
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function userToRowTemplate(user) {
  return `
    <tr id=${user.id}>
        <td>${user.id}</td>
        <td>${user.first_name + " " + user.last_name}</td>
        <td><img src="${user.avatar}" height=80 alt="profile picture"></td>
        <td>${user.email}</td>
    </tr>`;
}

document.addEventListener("DOMContentLoaded", function () {
  populateUsersTable();
  document.querySelector("#searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const pageNumber = document.querySelector("#page").value;
    populateUsersTable(pageNumber);
  });
});
