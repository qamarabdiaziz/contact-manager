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
    // Add event listener to delete button
    const deleteButton = tableRow.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      tableRow.remove();
    });



//    Get the element to attach an eventlistener to
const updateButton = tableRow.querySelector('.update-btn');
updateButton.addEventListener('click', () => {
  // Get the updated contact information from the user
  const updatedContact = {
    fullname: prompt("Enter updated fullname:"),
    picture: prompt("Enter updated picture URL:"),
    email: prompt("Enter updated email:"),
    gender: prompt("Enter updated gender:"),
    ip_address: prompt("Enter updated IP address:"),
    phone_number: prompt("Enter updated phone number:")
  };

  // Update the contact on the server
  fetch(`http://localhost:3000/Contacts/${contact.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedContact)
  })
  .then(res => res.json())
  .then(data => {
    // Update the contact in the table
    tableRow.innerHTML = `
      <th scope="row">${data.fullname}</th>
      <td><img class="profile-img" src=${data.picture}></td>
      <td>${data.email}</td>
      <td>${data.gender}</td>
      <td>${data.ip_address}</td>
      <td>${data.phone_number}</td>
      <td><button class="update-btn">Update</button></td>
      <td><button class="delete-button">Delete</button></td>
    `;
  })
  .catch(error => console.log(error));
});

      document.querySelector(".table-body").appendChild(tableRow);
  }

  function fetchContacts() {
    fetch("http://localhost:3000/Contacts")
      .then(res => res.json())
      .then(contacts => {
        contacts.forEach(contact => {
          displayContacts(contact);
        });
        // console.log(contacts)
      });
  }
  fetchContacts()


  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add-contact-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

