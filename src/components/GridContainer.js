const GridContainer = ({ children }) => {
  const styles = {
    display: "grid",
    gridTemplateRows: "150px 3fr",
    gridTemplateColumns: "2fr 4fr 4fr",
  };
  return <div style={styles}>{children}</div>;
};

export default GridContainer;
