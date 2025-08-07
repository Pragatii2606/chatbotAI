 const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatbox = document.getElementById('chatbox');

    const botReply = (msg) => {
      msg = msg.toLowerCase();

      if (msg.includes("hello") || msg.includes("hi")) {
        return "Hey there! 😊 How can I help you today?";
      } else if (msg.includes("how are you")) {
        return "I'm just a bot, but I'm doing great! 😄 How about you?";
      } else if (msg.includes("bye")) {
        return "Goodbye! 👋 Have a great day!";
      } else if (msg.includes("your name")) {
        return "I'm ChatBot3000 🤖";
      } else {
        return "Hmm... I didn’t quite get that. Try asking something else! ❓";
      }
    };

    const addMessage = (message, sender = "user") => {
      const msgDiv = document.createElement("div");
      msgDiv.classList.add("p-2", "rounded", "max-w-xs");

      if (sender === "user") {
        msgDiv.classList.add("bg-blue-100", "self-end");
        msgDiv.innerText = `You: ${message}`;
      } else {
        msgDiv.classList.add("bg-gray-200", "self-start");
        msgDiv.innerText = `Bot: ${message}`;
      }

      chatbox.appendChild(msgDiv);
      chatbox.scrollTop = chatbox.scrollHeight;
    };

    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = userInput.value.trim();
      if (!input) return;

      addMessage(input, "user");
      const response = botReply(input);
      setTimeout(() => addMessage(response, "bot"), 500);

      userInput.value = "";
    });