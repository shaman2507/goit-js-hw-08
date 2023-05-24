import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onForm);
refs.form.addEventListener('input', throttle(onFormInput, 500));
const KEY_FORM = 'feedback-form-state';

const { email, message } = refs.form.elements;

saveEl();
formData = {};
function onForm(e) {
    const mailEl = email.value;
    const messageEl = message.value;
    const formDataSubmit = { mailEl, messageEl }
    console.log(formDataSubmit);
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(KEY_FORM);
}

console.log(formData);

function onFormInput(e) {
    formData = { email: email.value, message: message.value };
    const stringifyKey = localStorage.setItem(KEY_FORM, JSON.stringify(formData));
}

function saveEl() {
    let saveMessage = JSON.parse(localStorage.getItem(KEY_FORM)) || '';
    if (saveMessage) {
        email.value = saveMessage.email || '';
        message.value = saveMessage.message || '';
        return;
    }
}