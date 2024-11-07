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
            <div id="cookies_info">Ta strona internetowa korzysta z plików cookie, aby zapewniæ lepsz¹ jakoœæ przegl¹dania, analizowaæ ruch na stronie oraz dostosowaæ treœci do Twoich preferencji. Kontynuuj¹c korzystanie z tej witryny, wyra¿asz zgodê na u¿ywanie plików cookie zgodnie z nasz¹ polityk¹ prywatnoœci.
                <button id="cookies_button" onClick={closeCookieWindow}>Zaakceptuj pliki cookie</button>
            </div>
        </div>
    )
}
export default Modal;