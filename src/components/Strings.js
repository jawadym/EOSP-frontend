import { Collapse, Pre, Button } from "@blueprintjs/core";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
const Strings = () => {
  const styles = {
    width: "100%",
    marginTop: "20px",
  };
  const [stringsOpen, setStringsOpen] = useState(false);
  const strings =
    "!This program cannot be run in DOS mode.\r\nRich'-)\r\n`.rdata\r\n@.data\r\nV;V4}3\r\njCVVVVVW\r\nSVu9j(\r\n@@BBG;\r\nCCAAHu\r\nCCGGHu\r\nPPPPPPP\r\nt'Vh<SN\r\n+D$8+t$4\r\n8SVWhxaN\r\nYu,hxWN\r\nthHHtAH\r\nu%SSSWSSSh\r\n;E(u!;],u\r\ntwf9s@\r\n9/tU9k\r\n9>t~9~\r\nYYuXSW\r\n9>t}9~\r\nWVhpXN\r\nYuhVhLZN\r\nYYu!jh\r\nYYu>Vj<\r\nYYuOj,\r\nYY9s(t[\r\nt-h`XN\r\nYYu/Vj0\r\nO(+W4+\r\n_,+W0V+U\r\nt:Ht+Ht$Ht";
  return (
    <>
      <div style={styles}>
        <SectionTitle title={"Strings"} />
        <Button
          style={{ fontWeight: "500" }}
          onClick={() => {
            setStringsOpen(!stringsOpen);
          }}
          icon={stringsOpen ? "chevron-up" : "chevron-down"}
        >
          {!stringsOpen ? "Expand" : "Retract"}
        </Button>
        <Collapse isOpen={stringsOpen}>
          <Pre>{strings}</Pre>
        </Collapse>
      </div>
    </>
  );
};

export default Strings;
