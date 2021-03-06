export default {
    root: {
      backgroundColor: "blue",
      height: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      overflowY: "scroll"
    },
    container: {
      width: "50%",
      display: "flex",
      alingItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap"
    },
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      color: "white",
      alignItems: "center",
      "& a": {
        color: "white",
        
      }
    },
    palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "5%"
    }
  };