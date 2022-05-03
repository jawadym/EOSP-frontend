import { useParams } from "react-router-dom";

const Workspace = () => {
  const { ws_id } = useParams();
  return <div>Workspace info for {ws_id}</div>;
};

export default Workspace;
