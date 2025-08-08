Google AI Studio Sticky Copy Button
A simple Tampermonkey user script that makes the "Copy" button in Google AI Studio sticky, so it's always visible on your screen. This script eliminates the need to scroll to the top of a long response just to copy the content, saving you time and effort.

Created: August 8, 2025

✨ Features
Always-on-Screen: The copy button stays in a fixed position as you scroll through long generated responses.

Simple & Lightweight: Works by injecting a small piece of CSS. It has no impact on the performance of the page.

Plug and Play: Install it through a user script manager, and it works automatically without any configuration.

🚀 Installation
To use this script, you first need a user script manager extension for your browser. Then, you can install the script.

1. Install a User Script Manager
If you don't have one, install Tampermonkey (or a similar extension like Greasemonkey or Violentmonkey).

Tampermonkey for Chrome

Tampermonkey for Firefox

Tampermonkey for Edge

2. Install the Script
Open your Tampermonkey Dashboard.

Click on the Create a new script tab (the + icon).

Delete the default boilerplate code.

Copy the entire code from the google-studio-copy-button-sticky.user.js file.

Paste the code into the new script editor in Tampermonkey.

Press Ctrl + S or go to File > Save to save the script.

The script will now be active whenever you visit a Google AI Studio URL.

🛠️ How to Use
Once the script is installed and enabled, simply navigate to any Google AI Studio chat page (e.g., https://aistudio.google.com/u/...). When a response is generated, the Copy button will remain in a fixed position on your screen, ready to be clicked no matter how far you scroll down.

🎨 Customization
You can easily adjust the position or background color of the sticky button to better fit your screen or personal preference.

Open the Tampermonkey dashboard.

Click on the Google studio copy button sticky script to edit it.

Find the CSS block within the style.textContent and modify the values.

style.textContent = `
span.mat-content {
    position: fixed;
    top: 142px;      /* Change this value to move it up or down */
    right: 461px;    /* Change this value to move it left or right */
    background: #522d2d4f; /* Change this for a different background color */
    height: fit-content;
    z-index: 999; /* Ensures it stays on top of other elements */
}
`;

Save the script to apply your changes.

📄 License
This project is open-source and available under the MIT License. See the LICENSE file for more details.
