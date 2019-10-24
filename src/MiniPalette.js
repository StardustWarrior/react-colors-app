import React from 'react';
import {withStyles} from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props){
    const {classes, paletteName, emoji, colors, handleClick} = props;
    const miniColorBoxes = colors.map(color => (
        <div className={classes.miniColor} style={{backgroundColor: color.color}} key={color.name}></div>
    ));
    console.log(classes);
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);