// Add your code here
function submitData(name, email) {
    // Define the URL and the data to be sent in the POST request
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email
    };
  
    // Make a POST request
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      // Append the new id value to the DOM
      const p = document.createElement('p');
      p.textContent = `ID: ${data.id}`;
      document.body.appendChild(p);
    })
    .catch(error => {
      // Append the error message to the DOM
      const p = document.createElement('p');
      p.textContent = `Error: ${error.message}`;
      document.body.appendChild(p);
    });
  }
  