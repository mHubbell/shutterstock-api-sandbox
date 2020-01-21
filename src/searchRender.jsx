import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

class SearchRender extends Component
{
  render()
  {
        const {result} = this.props
        const id = result.id;
        const previewUrl = result.assets && result.assets.preview && result.assets.preview.url;
        const description = result.description;
        return (
          <div>
          <Box>
          <img  width="500" key={id} src={previewUrl} />
          <Typography>
            {description}
          </Typography>
          </Box>
          </div>

        )

  }
}
export default SearchRender;
