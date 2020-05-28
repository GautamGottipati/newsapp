import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
class App extends Component {
  state = {
    news : []
  }

  componentWillMount(){
    let url = 'http://newsapi.org/v2/everything?q=Covid19&from=2020-05-28&sortBy=popularity&apiKey=81d07e65d3fc4dce951658850ed5a13c';
    axios.get(url).then((response)=>{
      this.setState({
        news : response.data.articles
      })
    });
  }

  render() {
    let i=1;
    let newz = this.state.news.map((topic)=>{
      return(
          <tr key={i}>
            <td>{i++}</td>
            <td>{topic.title}</td>
            <td><a href={topic.url} class="btn btn-primary">Find more...</a></td>
          </tr>
      )
    });
    return (
      <div className="App">
      <Table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Headings</th>
            <th>Links</th>

          </tr>
        </thead>
        <tbody>
          {newz}
        </tbody>
      </Table>      </div>
    );
  }
}

export default App;
