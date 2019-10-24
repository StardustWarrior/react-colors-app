export default { 
    Palette: {
        height: "100vh",
        position: "relative",
        overflow: "hidden"
    },
    colors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginTop: "-15px",
            marginLeft: "-50px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255,255,255,0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            color:"#FFFFFF",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none"
        }
    },
    PaletteFooter: {
      backgroundColor: "white",
      height: "5vh",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      fontWeight: "bold"
    },
    emoji: {
      fontSize: "1rem",
      margin: "0 1rem"
    }
};