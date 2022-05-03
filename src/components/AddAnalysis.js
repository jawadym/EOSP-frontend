import {
  Button,
  Classes,
  Overlay,
  H3,
  Intent,
  Alignment,
  AnchorButton,
  FormGroup,
  InputGroup,
  FileInput,
  Switch,
} from "@blueprintjs/core";
import { useState } from "react";
const AddAnalysis = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTypeChecked, setIsTypeChecked] = useState(true);

  return (
    <>
      <AnchorButton
        icon="add"
        text={"New Analysis"}
        size="regular"
        intent="primary"
        fill={false}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <Overlay
        usePortal={true}
        className={Classes.OVERLAY_SCROLL_CONTAINER}
        Align={Alignment.CENTER}
        isOpen={isOpen}
        onClose={(e) => setIsOpen(false)}
      >
        <div
          style={{ width: "50vw", marginTop: "10vh", marginLeft: "25vw" }}
          className={`${Classes.CARD} ${Classes.ELEVATION_4} docs-overlay-example-transition`}
        >
          <H3>Start new Analysis</H3>
          <p>
            Fill the form below to submit new samples to the analysis
            environment.
          </p>

          <FormGroup
            label={"Analysis Name"}
            labelFor="un-input"
            style={{ width: "20vw" }}
          >
            <div>
              <InputGroup id="a-name" placeholder="Malware XX" small={true} />
            </div>
          </FormGroup>
          <FormGroup
            label={"Tags"}
            labelFor="un-input"
            style={{ width: "20vw" }}
          >
            <div>
              <InputGroup
                id="a-name"
                placeholder="i.e ransomeware, botnet..."
                small={true}
              />
            </div>
          </FormGroup>
          {isTypeChecked ? (
            <FormGroup
              label={"uplaod artifact"}
              labelFor="un-input"
              style={{ width: "20vw" }}
            >
              <div>
                <FileInput fill />
              </div>
            </FormGroup>
          ) : (
            <FormGroup
              label={"Specify URL"}
              labelFor="url-input"
              style={{ width: "20vw" }}
            >
              <div>
                <InputGroup
                  id="a-name"
                  placeholder="i.e google.com"
                  small={true}
                />
              </div>
            </FormGroup>
          )}
          <Switch
            labelElement={"Observable Type"}
            innerLabelChecked="File"
            innerLabel="URL"
            checked={isTypeChecked}
            onChange={() => setIsTypeChecked(!isTypeChecked)}
          />
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button intent={Intent.PRIMARY}>New</Button>
            <Button intent={Intent.DANGER} onClick={(e) => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Overlay>
    </>
  );
};

export default AddAnalysis;
