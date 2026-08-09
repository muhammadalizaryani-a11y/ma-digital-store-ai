// MA DIGITAL STORE AI STUDIO

const startButton = document.getElementById("startBtn");

if (startButton) {
  startButton.addEventListener("click", function () {
    alert(
`Welcome to MA DIGITAL STORE AI STUDIO

Your AI Business Assistant is Ready.

Next Features Coming Soon:

📚 Prompt Library
🎨 Poster Generator
📄 CV Generator
🏛 Government Services

Thank you for visiting!`
    );
  });
}

const promptButtons = document.querySelectorAll(".prompt-card button");

const promptData = {
  "🏛 Domicile Prompt": `Create a professional Domicile Certificate service poster for MA DIGITAL STORE.

Important:
- Only Domicile service
- Use clean Urdu text
- Make it professional and print-ready
- Include shop name: MA DIGITAL STORE
- Add contact: 03275051049
- Make the design suitable for Facebook, WhatsApp, and A4 poster`,

  "📄 CV Prompt": `Create a professional ATS-friendly CV and Resume service poster for MA DIGITAL STORE.

Important:
- Only CV service
- Clean professional layout
- Add shop name: MA DIGITAL STORE
- Add contact: 03275051049
- Suitable for Facebook, WhatsApp, and print`,

  "📸 Passport Photo Prompt": `Create a professional passport photo editing service poster for MA DIGITAL STORE.

Important:
- Only passport photo service
- Clean background
- Professional layout
- Add shop name: MA DIGITAL STORE
- Add contact: 03275051049
- Suitable for social media and print`
};

promptButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".prompt-card");
    const title = card ? card.querySelector("h3")?.textContent.trim() : "";

    const prompt = promptData[title] || "Prompt not found.";

    const outputBox = document.getElementById("promptText");
    const copyBtn = document.getElementById("copyPrompt");

    if (outputBox) {
      outputBox.value = prompt;
      outputBox.focus();
    } else {
      alert(prompt);
    }

    if (copyBtn) {
      copyBtn.onclick = async function () {
        try {
          await navigator.clipboard.writeText(prompt);
          alert("Prompt copied!");
        } catch (error) {
          alert("Copy failed. Please copy manually.");
        }
      };
    }
  });
});
