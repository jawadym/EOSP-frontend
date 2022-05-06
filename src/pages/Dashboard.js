import GridContainer from "../components/GridContainer";
import GridItem from "../components/GridItem";
import Leading from "../components/Leading";
import WorkspaceList from "../components/WorkspaceList";
import SideMenu from "../components/SideMenu";
import { Tree } from "@blueprintjs/core";
import { Classes } from "@blueprintjs/core";
import SideMenuWrapper from "../components/SideMenuWrapper";
import AddAnalysis from "../components/AddAnalysis";
import { Routes, Route, Navigate } from "react-router-dom";
import Workspace from "./Workspace";

const Dashboard = ({ loggedIn }) => {
  document.title = "Dashboard | Ey Project";
  const menuContext = [
    {
      id: 5,
      label: "Available Analyses",
      isExpanded: true,
      childNodes: [
        {
          id: 0,
          icon: "document",
          label: "Malware 1",
        },
      ],
    },
  ];

  const handleNodeClick = (e) => {
    console.log(e);
  };
  return (
    <>
      {!loggedIn && <Navigate to="/" />}
      <GridContainer>
        <GridItem isSideMenu={true}>
          <SideMenuWrapper>
            <SideMenu>
              <AddAnalysis />
            </SideMenu>
            <SideMenu>
              <Tree
                onNodeClick={(e) => handleNodeClick(e)}
                contents={menuContext}
                className={Classes.ELEVATION_0}
              />
            </SideMenu>
          </SideMenuWrapper>
        </GridItem>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GridItem isLeading={true}>
                  <Leading
                    heading="Malware Analysis Space"
                    description="Manage samples and reports"
                    BREADCRUMBS={[
                      { href: "/", text: "Home" },
                      {
                        href: "/workspaces",
                        icon: "folder-close",
                        text: "workspaces",
                      },
                    ]}
                  />
                </GridItem>
                <GridItem isMenu={true}>{<WorkspaceList />}</GridItem>
              </>
            }
          />
          <Route
            path="/:ws_id"
            element={
              <GridItem isMenu={true}>
                <Workspace />
              </GridItem>
            }
          />
        </Routes>
      </GridContainer>
    </>
  );
};

export default Dashboard;
