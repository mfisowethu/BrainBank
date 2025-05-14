// Hardcoded user credentials
const validUser = {
    username: "Mandla",
    password: "12345"
};

// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorElement = document.getElementById('loginError');
            
            if (username === validUser.username && password === validUser.password) {
                // Successful login
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('username', username);
                window.location.href = 'dashboard.html';
            } else {
                // Failed login
                errorElement.textContent = 'Invalid username or password';
            }
        });
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sessionStorage.removeItem('loggedIn');
            sessionStorage.removeItem('username');
            window.location.href = 'index.html';
        });
    }

    // Protect dashboard route
    if (window.location.pathname.includes('dashboard.html')) {
        const isLoggedIn = sessionStorage.getItem('loggedIn');
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }
    }
});