function login(event) {
            event.preventDefault(); 

            // Get the input values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const correctUsername = 'Admin';
            const correctPassword = '123';

            if (username === correctUsername && password === correctPassword) {
                document.getElementById('message').textContent = 'Login successful! Welcome, ' + username + '!';
                document.getElementById('message').style.color = '#d19fe8';
                window.location.replace("kuromi.html");
            } else {
                document.getElementById('message').textContent = 'Incorrect username or password. Please try again!';
                document.getElementById('message').style.color = '#ff6b6b';
            }
        }