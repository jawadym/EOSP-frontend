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
  Colors,
} from "@blueprintjs/core";
import { useState } from "react";
const AddAnalysis = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTypeChecked, setIsTypeChecked] = useState(true);
  const [router, setRouter] = useState(true);
  return (
    <>
      <AnchorButton
        style={{ color: Colors.BLACK, backgroundColor: Colors.GOLD4 }}
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
        onClose={() => setIsOpen(false)}
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
              <InputGroup id="a-name" placeholder="Malware name" />
            </div>
          </FormGroup>

          {isTypeChecked ? (
            <FormGroup
              label={"Uplaod Artifact"}
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
          <Switch
            labelElement={"Router"}
            innerLabelChecked="None"
            innerLabel="Internet"
            checked={!router}
            onChange={() => setRouter(!router)}
          />

          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button intent={Intent.PRIMARY}>Start</Button>
            <Button intent={Intent.DANGER} onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Overlay>
    </>
  );
};

export default AddAnalysis;
