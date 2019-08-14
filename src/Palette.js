import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './NavBar';
import { thisTypeAnnotation } from '@babel/types';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import './Palette.css';

const styles = { 
  Palette: {
    height: "100vh",
    position: "relative",
    overflow: "hidden"
  },
  colors: {
    height: "90%"
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
}


class Palette extends Component {
  constructor(props){
    super(props);
    this.state = {level: 500, format: "hex"};
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level){
    this.setState({level});
    //console.log(level);
  }

  changeFormat(val){
    //this.setState({format: val});
    //alert(val);
    this.setState({format: val});
  }

  render(){
    const {classes} = this.props;
    const {colors, paletteName, emoji, id} = this.props.palette;
    const {level, format} = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} key={color.id} moreUrl={`/palette/${id}/${color.id}`} showingFullPalette />
    ));
    return (
        <div className={classes.Palette}>
            <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors />
            <div className={classes.colors}>
              {colorBoxes}
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    );
  }
}

export default withStyles(styles)(Palette);