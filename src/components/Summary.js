import { Colors } from "@blueprintjs/core";
import SectionTitle from "./SectionTitle";

const Summary = () => {
  const styles = {
    width: "100%",
    marginTop: "20px",
  };

  const summary = [
    {
      title: "Size",
      value: "70.3KB",
    },
    {
      title: "Type",
      value: "PE32 executable (GUI) Intel 80386, for MS Windows",
    },
    {
      title: "MD5",
      value: "5932887b6aa8636d26e512706de4605c",
    },
    {
      title: "SHA1",
      value: "c8da9ccefda9a91dfd353c7c8bef82a3954f83dd",
    },
    {
      title: "SHA256",
      value: "3f88e72a026f3902e156caafc97ebe82fa057a3c48ee3c9b4ce01a97533f938a",
    },
    {
      title: "CRC32",
      value: "1A235AD5",
    },
    {
      title: "ssdeep",
      value: "None",
    },
  ];

  return (
    <>
      <div style={styles}>
        <SectionTitle title={"Summary"} />
      </div>
      <table className="bp4-html-table " style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ color: Colors.RED4 }}>Metadata</th>
            <th style={{ color: Colors.RED4 }}>Corresponding Value</th>
          </tr>
        </thead>
        <tbody>
          {summary.map((e, index) => {
            return (
              <tr key={index}>
                <td>
                  <strong>{e.title}</strong>
                </td>
                <td>{e.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Summary;
