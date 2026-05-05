document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#email-checker-form");
  const emailInput = document.querySelector("#email-input");
  const messageText = document.querySelector("#message-text");

  const EMAIL_API_URL = "https://www.disify.com/api/email/";

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form submission

    // Clear previous messages and styles
    resetFormState();

    const email = emailInput.value.trim();

    // Validate email format
    if (!validateEmail(email)) {
      updateUI("Invalid email format. Please try again.", "error");
      return;
    }

    // Make API call
    try {
      const data = await fetchEmailData(email);

      console.log("API response data:", data); // Log the API response data

      if (data.disposable) {
        updateUI("This is a disposable email address.", "error");
      } else {
        updateUI("This is a valid email address.", "success");
      }
    } catch (error) {
      updateUI("Failed to check email. Please try again later.", "error");
      console.error("Error fetching email data:", error);
    }
  });

  // Helper Functions

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function fetchEmailData(email) {
    try {
      console.log("Fetching email data for:", email); // Log the email being checked
      const response = await fetch(`${EMAIL_API_URL}${email}`);
      if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
      const data = await response.json();
      console.log("API request succeeded:", data); // Log the successful API response
      return data;
    } catch (error) {
      console.error("Network error:", error); // Log network errors
      throw new Error(`Network error: ${error.message}`);
    }
  }

  function updateUI(message, status) {
    form.classList.remove("valid", "error");
    form.classList.add(status === "success" ? "valid" : "error");
    messageText.textContent = message;
  }

  function resetFormState() {
    form.classList.remove("valid", "error");
    messageText.textContent = "";
  }
});
