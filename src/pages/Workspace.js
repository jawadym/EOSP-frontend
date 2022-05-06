import { Tabs, Tab, Button } from "@blueprintjs/core";
import { useParams } from "react-router-dom";
import ExecutionInformation from "../components/ExecutionInformation";
import Leading from "../components/Leading";
import Screenshots from "../components/Screenshots";
import Summary from "../components/Summary";
import AnalysisScore from "../components/AnalysisScore";
import CompilationSections from "../components/CompilationSections";
import Strings from "../components/Strings";
import { useState } from "react";
import virusTotalIcon from "../assets/virustotal.png";

const Workspace = () => {
  const { ws_id } = useParams();
  const [tabId, setTabId] = useState();
  const handleTabChange = (navbarTabId) => {
    setTabId(navbarTabId);
  };
  return (
    <div>
      <Leading
        heading={`Report for Malware ${ws_id}`}
        isNotBreadcrumbs={true}
        description={`Generated Today`}
        withDivider={true}
      >
        <AnalysisScore message="Score of 7 / 10" />
      </Leading>

      <Tabs
        animate={true}
        onChange={handleTabChange}
        renderActiveTabPanelOnly={true}
        selectedTabId={tabId}
      >
        <Tab
          id="Summary"
          title="Summary"
          panel={
            <>
              <Screenshots />
              <ExecutionInformation />
              <Summary />
            </>
          }
        />
        <Tab
          id="static"
          title="Static Analysis"
          panel={
            <>
              <CompilationSections />
              <Strings />
            </>
          }
        />
        <Tab id="bAnalysis" title="Behavioral Analysis" panel={<></>} />
        <Tab id="iocs" title="Exported IOCs" panel={<></>} />
        <Tab id="files" title="Exported Files" panel={<></>} />

        <a href="https://www.virustotal.com/gui/file/361444b2b58a18dbf6756abca91a9eb23e6f8d6189ebe5913719385e07894370">
          <Button
            outlined={false}
            minimal={true}
            icon={
              <img src={virusTotalIcon} alt="Virustotal icon" width="20px" />
            }
          >
            Virustotal
          </Button>
        </a>
      </Tabs>
    </div>
  );
};

export default Workspace;
