const GridItem = ({ children, isLeading, isSideMenu, isMenu }) => {
  let styles = {
    // padding: "20px",
    margin: "30px",
  };
  if (isLeading) {
    styles = {
      ...styles,
      gridColumnStart: 2,
      gridColumnEnd: 5,
    };
  }
  if (isSideMenu) {
    styles = {
      ...styles,
      gridRowStart: 1,
      gridRowEnd: 5,
    };
  }
  if (isMenu) {
    styles = {
      ...styles,
      gridColumnStart: 2,
      gridColumnEnd: 5,
    };
  }

  return <div style={styles}>{children}</div>;
};

export default GridItem;
