'use strict'

function showErrorModal(errorMessage) {

    if (document.getElementById('errorItem')) return;

    const overlayError = document.createElement('div');
    overlayError.className = 'overlay-error';

    const errorItem = document.createElement('div');
    errorItem.id = 'error-item';

    const errorTitle = document.createElement('h2');
    errorTitle.className = 'error-title';
    errorTitle.textContent = 'Ошибка!'

    const errorClose = document.createElement('a');
    errorClose.className = 'error-close';
    errorClose.textContent = 'Закрыть'

    errorClose.addEventListener('click', () => {
        document.body.removeChild(overlayError);
    })

    const errorDescription = document.createElement('p');
    errorDescription.className = 'error-description';
    errorDescription.textContent = errorMessage;

    overlayError.appendChild(errorItem);
    errorItem.appendChild(errorTitle);
    errorItem.appendChild(errorClose);
    errorItem.appendChild(errorDescription);

    document.body.appendChild(overlayError);
}

export default showErrorModal;