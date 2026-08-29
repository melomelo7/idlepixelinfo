// Create and inject the initial hidden CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    #newModuleID {
        display: none;
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 20px;
        background: #333;
        color: white;
        border-radius: 5px;
        z-index: 9999;
        transition: opacity 0.3s ease;
        opacity: 0;
    }
    #newModuleID.active {
        display: block;
        opacity: 1;
    }
`;
document.head.appendChild(styleSheet);

// Create the div but keep it hidden
const newModule = document.createElement('div');
newModule.id = 'newModuleID';
newModule.innerHTML = `
    <h3>Admin Panel</h3>
    <p>Secret module activated</p>
    <!-- Add your custom content here -->
`;
document.body.appendChild(newModule);

// Function to check and handle module visibility
const checkModuleAccess = () => {
    const SECRET_KEY = "moduleAccess";
    const SECRET_VALUE = "x7k9p2m5q8";
    
    if (localStorage.getItem(SECRET_KEY) === SECRET_VALUE) {
        newModule.classList.add('active');
    } else {
        newModule.classList.remove('active');
    }
};

// Check on page load
checkModuleAccess();

// Add a MutationObserver to prevent manual removal
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (!document.getElementById('newModuleID')) {
            document.body.appendChild(newModule);
            checkModuleAccess();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Console activation function (obfuscate this in production)
const activateModule = (key) => {
    if (key === "secretActivationKey123") {
        localStorage.setItem("moduleAccess", "x7k9p2m5q8");
        checkModuleAccess(); // Immediately check and update visibility
        console.log("Module activated");
        return true;
    }
    console.log("Invalid key");
    return false;
};

// Console deactivation function (obfuscate this in production)
const deactivateModule = (key) => {
    if (key === "secretActivationKey123") {
        localStorage.removeItem("moduleAccess");
        checkModuleAccess(); // Immediately check and update visibility
        console.log("Module deactivated");
        return true;
    }
    console.log("Invalid key");
    return false;
};

// Optional: Add event listener for localStorage changes from other tabs
window.addEventListener('storage', (e) => {
    if (e.key === "moduleAccess") {
        checkModuleAccess();
    }
});