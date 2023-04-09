function displayContacts(contact) {
    let tableRow = document.createElement("tr");
    tableRow.id = "table-row";
    tableRow.innerHTML = `
      <th scope="row">${contact.fullname}</th>
      <td><img class="profile-img" src=${contact.picture}></td>
      <td>${contact.email}</td>
      <td>${contact.gender}</td>
      <td>${contact.ip_address}</td>
      <td>${contact.phone_number}</td>

      <td><button class ="update-btn"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>
      <td><button class="delete-button"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
    `;
}