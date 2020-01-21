import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import SearchRender from './searchRender';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query:'', results: [] };
  }

  doSearch = async () => {
    const {query} = this.state;
    console.log('query', query);
    const results = await axios.get('/search',{params:{query}});
    const { data } = results;

    console.log('data', data);
    this.setState({
      results: data.data,
    });
  }

//added a map which basically pulls an image from the asset in each object (the preview image) and pritns it
  render() {
    const { results, query } = this.state;

    return (
      <Box>
      <div>
        <TextField onChange = {( event)=> this.setState({query:event.target.value})}/>
        </div>
        <Button onClick={this.doSearch}>Search</Button>


        {results.map((result) => {

            return (<SearchRender result = {result} />)
            // return (<img key={id} src={previewUrl} />)
            // return <pre key={result.id}>{JSON.stringify(result, null, 2)}</pre>
          }
        )}
      </Box>
    );
  }
}

export default Search;
