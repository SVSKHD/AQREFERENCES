import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
function AqNameIconButton(props) {
  const { name, email, signout } = props;
  return (
    <>
      <ButtonGroup >
        <DropdownButton
          as={ButtonGroup}
          align="end"
          variant="dark"
          title={name}
          id="bg-nested-dropdown"
        >
          <Dropdown.Item eventKey="1" href={`/dashboard/${name}`}>
            Dashboard
          </Dropdown.Item>
        </DropdownButton>
        <Button onClick={signout} variant="dark"><FaSignOutAlt size={20}/></Button>
      </ButtonGroup>
    </>
  );
}

export default AqNameIconButton;
