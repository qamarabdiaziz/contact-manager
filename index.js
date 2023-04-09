document.addEventListener("DOMContentLoaded", function() {
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

//   Add event listener to contact form submit event
document.querySelector("#contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Create new contact object
    const newContact = {
      fullname: document.querySelector("#fullname").value,
      picture: document.querySelector("#picture").value,
      email: document.querySelector("#email").value,
      gender: document.querySelector("#gender").value,
      ip_address: document.querySelector("#ip_address").value,
      phone_number: document.querySelector("#phone_number").value
    };
    // Add new contact to server
    fetch("http://localhost:3000/Contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })
    .then(res => res.json())
    .then(data => {
      // Add new contact to table
      displayContacts(data);
      // Hide "Add contact" form and reset form fields
    //   document.querySelector("#add-contact-form").classList.add("hidden");
      document.querySelector("#fullname").value = "";
      document.querySelector("#picture").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#gender").value = "";
      document.querySelector("#ip_address").value = "";
      document.querySelector("#phone_number").value = "";
      })
      .catch(error => console.log(error));
      });

      const cancelButton = document.querySelector('.cancel-btn');

cancelButton.addEventListener('click', () => {
  const modal = document.getElementById('myModal');
  modal.style.display = "none";
});

})

const searchQuery = document.getElementById("search-input").value.toLowerCase();
const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(searchQuery)
);
displayContacts(filteredContacts);
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchContacts);







