import {
  H3,
  Breadcrumb,
  Breadcrumbs,
  Divider,
  H6,
  Colors,
} from "@blueprintjs/core";

import "./Leading.css";
const Leading = ({
  heading,
  description,
  BREADCRUMBS,
  isNotBreadcrumbs,
  withDivider,
  children,
}) => {
  const renderCurrentBreadcrumb = ({ text, ...restProps }) => {
    return <Breadcrumb {...restProps}>{text}</Breadcrumb>;
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <H3>{heading}</H3>
      <H6 style={{ color: Colors.GOLD4, marginBottom: "25px" }}>
        {description}
      </H6>
      {!isNotBreadcrumbs && (
        <Breadcrumbs
          currentBreadcrumbRenderer={renderCurrentBreadcrumb}
          items={BREADCRUMBS}
        />
      )}
      {children}
      {withDivider && <Divider />}
    </div>
  );
};

export default Leading;
