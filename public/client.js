const socket = io();

let username;
let input = document.querySelector("#text");
let messageArea = document.querySelector(".chat__conversation-board");
do {
	username = prompt("Please Enter a Name");
} while (!username);

input.addEventListener("keyup", (e) => {
	if (e.key == "Enter") sendMessage(e.target.value);
});

function sendMessage(message) {
	let msg = {
		user: username,
		message: message,
	};

	appendMessage(msg, "Outgoing");
}

function appendMessage(msg, type) {
	let createDiv = document.createElement("div");
	let className = type;
	createDiv.classList.add(className, "message");

	let markup = `<div class="chat__conversation-board__message-container">
    <div class="chat__conversation-board__message__person">
        <div class="chat__conversation-board__message__person__avatar">
            <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Monika Figi"
            />
        </div>
        <span class="chat__conversation-board__message__person__nickname"
            >${msg.user}</span
        >
    </div>
    <div class="chat__conversation-board__message__context">
        <div class="chat__conversation-board__message__bubble">
            <span
                >${msg.message}</span
            >
        </div>
    </div>
    <div class="chat__conversation-board__message__options">
        <button
            class="btn-icon chat__conversation-board__message__option-button option-item emoji-button"
        >
            <svg
                class="feather feather-smile sc-dnqmqq jxshSx"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
        </button>
        <button
            class="btn-icon chat__conversation-board__message__option-button option-item more-button"
        >
            <svg
                class="feather feather-more-horizontal sc-dnqmqq jxshSx"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
            </svg>
        </button>
    </div>
</div>`;

	createDiv.innerHtml = markup;
	messageArea.appendChild(createDiv);
	console.log(createDiv);
}
