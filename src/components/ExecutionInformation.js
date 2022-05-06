import { Colors } from "@blueprintjs/core";
import SectionTitle from "./SectionTitle";
const ExecutionInformation = () => {
  const styles = {
    marginTop: "20px",
  };

  return (
    <div>
      <div style={styles}>
        <SectionTitle title={"Execution Information"} />
      </div>
      <table className="bp4-html-table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ color: Colors.RED4 }}>Category</th>
            <th style={{ color: Colors.RED4 }}>Started</th>
            <th style={{ color: Colors.RED4 }}>Completed</th>
            <th style={{ color: Colors.RED4 }}>Duration</th>
            <th style={{ color: Colors.RED4 }}>Routing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FILE</td>
            <td>May 5, 2022, 8:01 p.m.</td>
            <td>May 5, 2022, 8:02 p.m.</td>
            <td>73 seconds</td>
            <td>internet</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExecutionInformation;
