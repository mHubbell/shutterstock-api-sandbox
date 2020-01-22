import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    'margin': '10px',
    'padding':'10px',
    'width': '315px',
    // 'list-style':'none',
    // 'display':'-webkit-box',
    // 'display':'-moz-box',
    // 'display':'ms-flexbox',
    // 'display':'-webkit-flex',
    // 'display':'flex',
    'flex-wrap': 'wrap',
    '-webkit-flex-flow':'row wrap',
    'justify-content':'space-around',

   },
  image:{
    'flex': '1 0 21%',
    'background':'tomato',
    'padding':'5px',
    'width':'200px',
    'height':'150px',
    'margin-top':'10px',
    'line-height':'150px',
    'color':'white',
    'font-weight':'bold',
    'font-size':'3em',


  },
  type:{

  }
};

class SearchRender extends Component
{
  render()
  {
        const {result , classes} = this.props
        const id = result.id;
        const previewUrl = result.assets && result.assets.preview && result.assets.preview.url;
        const description = result.description;
        return (
            <Box className = {classes.root}>

              <img className = {classes.image}  width="500" key={id} src={previewUrl} />\
              <Typography className= {classes.type}>
              {description}
              </Typography>

            </Box>


        )

  }
}
export default withStyles(styles)(SearchRender);
