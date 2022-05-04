import { Button, ButtonGroup, Alignment } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";

const EntryListing = ({ name, status, date, viewable, id }) => {
  let navigate = useNavigate();

  const handleEntryClick = (e) => {
    console.log("running");
    e.preventDefault();
    
  };

  const handleInspectEvent = (e) => {
    e.stopPropagation();
    navigate(`./${id}`);
    console.log("want to inspect " + id);
  };
  const handleDeleteEvent = (e) => {
    e.stopPropagation();
    console.log("want to delete " + id);
  };
  return (
    <tr onClick={handleEntryClick}>
      <td>{name}</td>
      <td>{status}</td>
      <td>{date}</td>
      <td align={Alignment.RIGHT}>
        <ButtonGroup minimal={true}>
          <Button
            icon="trash"
            intent="danger"
            onClick={handleDeleteEvent}
          ></Button>
          {viewable && (
            <Button
              icon="eye-open"
              intent="primary"
              onClick={handleInspectEvent}
            ></Button>
          )}
        </ButtonGroup>
      </td>
    </tr>
  );
};

export default EntryListing;
