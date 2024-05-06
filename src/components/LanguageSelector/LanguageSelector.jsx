import { Dropdown } from 'react-bootstrap';
import { MediaIcon } from '../utils/utils';


function LanguageSelector({language, handleLanguageChange}) {

    return (
        <Dropdown onSelect={handleLanguageChange}>
            <Dropdown.Toggle as="div" id="dropdown-basic">
                <img src={MediaIcon[language]} alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="es">
                    <img src={MediaIcon.es} alt="" />
                    Español
                </Dropdown.Item>
                <Dropdown.Item eventKey="pt">
                    <img src={MediaIcon.pt} alt="" />
                    Português
                </Dropdown.Item>
                <Dropdown.Item eventKey="us">
                    <img src={MediaIcon.us} alt="" />
                    English
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguageSelector;