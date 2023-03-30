const userNameInput = document.querySelector('#username');
//submit validation

/* userNameInput.addEventListener('invalid', () => {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Not enough letters');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Too many letters');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Please fill in your username');
  } else {
    userNameInput.setCustomValidity('');
  }
}); */

//live validation

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 10;

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Please add ' + (MIN_NAME_LENGTH - valueLength) + ' more letters');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Please remove ' + (valueLength - MAX_NAME_LENGTH) + ' letters');
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
});
