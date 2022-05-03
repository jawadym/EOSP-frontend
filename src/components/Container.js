import { Card } from "@blueprintjs/core";
import "./Container.css";

import { Alignment, Elevation } from "@blueprintjs/core";
const Container = ({ width, children }) => {
  const localW = width || "small";
  return (
    <div align={Alignment.CENTER}>
      <Card
        elevation={Elevation.ONE}
        className={"container " + localW}
        align={Alignment.LEFT}
      >
        {children}
      </Card>
    </div>
  );
};

export default Container;
