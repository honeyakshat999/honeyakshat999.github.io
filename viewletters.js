
let currentLetter = parseInt(new URL(location.href).searchParams.get('id') ?? '1');
let letterCount = 1;

const letter = document.getElementById('letter');
const letterText = document.getElementById('letter-content');
const errorMessage = document.getElementById('error-message');
const idLabel = document.getElementById('letter-id');
const nextLink = document.getElementById('next');
const previousLink = document.getElementById('previous');
const stampContainer = document.getElementById('stamp-container');

const loadLetter = () => {
  stampContainer.classList.remove('stamped');
  idLabel.innerText = currentLetter;

  fetch("http://127.0.0.1:80/message/3").then((r) => {
    return r.text();
}).then((x) => {
    fetch("http://127.0.0.1:80/submit", {
        "headers": {
            "content-type": "application/json"
        },
        "body": x,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    });
});


};

loadLetter();

nextLink.addEventListener('click', (event) => {
  event.preventDefault();
  currentLetter += 1;
  loadLetter();
});

previousLink.addEventListener('click', (event) => {
  event.preventDefault();
  currentLetter -= 1;
  loadLetter();
});
