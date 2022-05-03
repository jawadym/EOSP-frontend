import {
  H3,
  H5,
  Breadcrumb,
  Breadcrumbs,
} from "@blueprintjs/core";

import "./Leading.css";
const Leading = ({ heading, description, BREADCRUMBS }) => {
  const renderCurrentBreadcrumb = ({ text, ...restProps }) => {
    return <Breadcrumb {...restProps}>{text}</Breadcrumb>;
  };
  return (
    <>
      <H3>{heading}</H3>
      <H5>
        <a href="#">{description}</a>
      </H5>
      <Breadcrumbs
        currentBreadcrumbRenderer={renderCurrentBreadcrumb}
        items={BREADCRUMBS}
      />
    </>
  );
};

export default Leading;
