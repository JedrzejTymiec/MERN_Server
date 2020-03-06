import React, {Component} from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import ArticleTableRow from "./articleTableRow";


export default class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/articles/")
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    dataTable() {
        return this.state.articles.map((res, i) => {
            return <ArticleTableRow obj={res} key={i}/>
        });
    }

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Content</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.dataTable()}
                    </tbody>
                </Table>
            </div>
        )
    }
}
