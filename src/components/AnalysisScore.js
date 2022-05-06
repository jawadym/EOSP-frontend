import { Callout } from "@blueprintjs/core";

const AnalysisScore = ({ message }) => {
  return (
    <div>
      <Callout intent={"danger"}>{message}</Callout>
    </div>
  );
};

export default AnalysisScore;
