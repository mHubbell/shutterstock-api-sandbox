import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  doSearch = async () => {
    const results = await axios.get('/search');
    const { data } = results;
    this.setState({
      results: data.data,
    });
  }

  render() {
    const { results } = this.state;
    return (
      <Box>
        <Button onClick={this.doSearch}>Welcome to Winternship! Try a Search</Button>
        {results.map((result) => <pre key={result.id}>{JSON.stringify(result, null, 2)}</pre>)}
      </Box>
    );
  }
}

export default Search;
