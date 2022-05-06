import EntryListing from "./EntryListing";

const WorkspaceList = () => {
  const styles = {
    width: "100%",
  };

  return (
    <>
      <table className="bp4-html-table bp4-interactive" style={styles}>
        <thead>
          <tr>
            <th>Analysis Name</th>
            <th>Status</th>
            <th>Submission date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <EntryListing
            name={"malware 1"}
            status={"pending"}
            date={"Today"}
            viewable={true}
            id={1}
          />
        </tbody>
      </table>
    </>
  );
};

export default WorkspaceList;
