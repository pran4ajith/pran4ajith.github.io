const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { inputDescription, inputAddress, inputFirstName, inputLastName, inputEmail, inputPhone, inputMessage } = event.target;

	// Use your API endpoint URL you copied from the previous step
  const endpoint =
    "https://duxk0rxm69.execute-api.us-east-1.amazonaws.com/default/sendContactEmail";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
	const body = JSON.stringify({
    senderDescription: inputDescription.value,
    senderAddress: inputAddress.value,
    senderName: inputFirstName.value + inputLastName.value,
    senderEmail: inputEmail.value,
    senderPhone: inputPhone.value,
    senderMessage: inputMessage.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      console.log("Sent successfully.");
    })
    .catch((error) => {
      console.log("An unkown error occured.");
        
    });
});
