import { Code, Colors } from "@blueprintjs/core";
import SectionTitle from "./SectionTitle";
const CompilationSections = () => {
  const styles = {
    width: "100%",
    marginTop: "20px",
  };
  const sections = [
    {
      name: ".text",
      vAddr: "0x00001000",
      vSize: "0x000d66dc",
      vData: "0x000d7000",
      entropy: "6.47453359079",
    },
  ];
  return (
    <>
      <div style={styles}>
        <SectionTitle title={"Compile Time"} />
        <Code>1970-01-18 23:56:32</Code>
      </div>
      <div style={styles}>
        <SectionTitle title={"Sections"} />
      </div>
      <table className="bp4-html-table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ color: Colors.RED4 }}>Name</th>
            <th style={{ color: Colors.RED4 }}>Virtual Address</th>
            <th style={{ color: Colors.RED4 }}>VirtualSize</th>
            <th style={{ color: Colors.RED4 }}>Size of Raw Data</th>
            <th style={{ color: Colors.RED4 }}>Entropy</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.name}</td>
                <td>{el.vAddr}</td>
                <td>{el.vSize}</td>
                <td>{el.vData}</td>
                <td>{el.entropy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CompilationSections;
