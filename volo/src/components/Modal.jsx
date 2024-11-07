import React, { useState } from "react";
import './Modal.css';

function Modal() {
    const [isOpen, setIsOpen] = useState(true);
    const closeCookieWindow = () => {
        setIsOpen(false)
    };
    if (!isOpen) return null;

    return (
        <div className="cookies">
            <div id="cookies_info">Ta strona internetowa korzysta z plik�w cookie, aby zapewni� lepsz� jako�� przegl�dania, analizowa� ruch na stronie oraz dostosowa� tre�ci do Twoich preferencji. Kontynuuj�c korzystanie z tej witryny, wyra�asz zgod� na u�ywanie plik�w cookie zgodnie z nasz� polityk� prywatno�ci.
                <button id="cookies_button" onClick={closeCookieWindow}>Zaakceptuj pliki cookie</button>
            </div>
        </div>
    )
}
export default Modal;