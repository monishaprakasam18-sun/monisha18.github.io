/* ---------------------------------------------------
CHATBOT ELEMENTS
--------------------------------------------------- */
const chatWindow = document.getElementById("chatbotWindow");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");

/* ---------------------------------------------------
CHATBOT KNOWLEDGE BASE (TRAINED ON YOUR RESUME)
--------------------------------------------------- */
const data = {
name: "Monisha Prakasam",

```
education:
    "B.A., LL.B. (Hons.) — SASTRA Deemed University, Expected 2026 (GPA 7.3).",

skills: [
    "Legal Research",
    "Drafting",
    "Client Communication",
    "Critical Thinking",
    "Systematic File Organization"
],

languages: [
    "Tamil",
    "English",
    "Telugu",
    "Malayalam",
    "Hindi"
],

internships: {
    "2026": "Adv. Rahul Kumar Singh — Remote (Jan 2026).",
    "2025": "Adv. B.S. Jeganathan — Chennai (Jun–Jul 2025).",
    "2024": "Adv. C. Muthusaravanan, Adv. R. Sreedhar & K. Munusami & Co. — Chennai & Madurai (2024).",
    "2023": "Adv. Thenmozhi — Thanjavur (Jul–Aug 2023).",
    "2022": "Adv. Vadivelu — Madurai & Thanjavur (2022–2023)."
},

research: {
    corporate:
        "Corporate Criminal Liability — International Journal for Multidisciplinary Research.",
    labour:
        "Impact of COVID-19 on Labourers in India — International Journal for Multidisciplinary Research.",
    ip:
        "Ambush Marketing in India: Rethinking Trademark Law — Indian Journal of Law and Legal Research."
},

contact:
    "You can email me at monishaprakasam18@gmail.com or call 8220773514."
```

};

/* ---------------------------------------------------
SEND MESSAGE TO CHAT WINDOW
--------------------------------------------------- */
function sendMessage(text, sender = "bot") {
const msg = document.createElement("div");
msg.className = sender === "user" ? "userMsg" : "botMsg";
msg.textContent = text;

```
chatBody.appendChild(msg);
chatBody.scrollTop = chatBody.scrollHeight;
```

}

/* ---------------------------------------------------
AI LOGIC FOR RESPONSES
--------------------------------------------------- */
function generateResponse(input) {
input = input.toLowerCase();

```
// Basic queries
if (input.includes("name")) return `My name is ${data.name}.`;
if (input.includes("education") || input.includes("study"))
    return data.education;

if (input.includes("skill"))
    return "My key skills are: " + data.skills.join(", ") + ".";

if (input.includes("language"))
    return "I speak: " + data.languages.join(", ") + ".";

// Internship year queries
if (input.includes("internship") || input.includes("experience")) {
    if (input.includes("2026")) return data.internships["2026"];
    if (input.includes("2025")) return data.internships["2025"];
    if (input.includes("2024")) return data.internships["2024"];
    if (input.includes("2023")) return data.internships["2023"];
    if (input.includes("2022")) return data.internships["2022"];

    return "I have internships from 2022 to 2026. Ask about a specific year!";
}

// Research categories
if (input.includes("research") || input.includes("paper")) {
    if (input.includes("corporate")) return data.research.corporate;
    if (input.includes("labour")) return data.research.labour;
    if (input.includes("ip")) return data.research.ip;

    return "I have 3 research papers in Corporate Law, Labour Law, and Intellectual Property.";
}

// Contact
if (input.includes("contact") || input.includes("email"))
    return data.contact;

return "I’m not sure about that. Try asking: skills, education, internships, research, or contact info!";
```

}

/* ---------------------------------------------------
HANDLE CHAT INPUT
--------------------------------------------------- */
chatInput.addEventListener("keypress", function (e) {
if (e.key === "Enter" && chatInput.value.trim() !== "") {
const userText = chatInput.value.trim();
sendMessage(userText, "user");

```
    chatInput.value = "";

    setTimeout(() => {
        const reply = generateResponse(userText);
        sendMessage(reply, "bot");
    }, 500);
}
```

});
