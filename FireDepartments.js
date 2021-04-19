import React from 'react'
import FireDepartment from './FireDepartment.js'
import Search from './Search'

/**
 *
 */
class FireDepartments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page:1,
            pageSize:12,
            query:"",
            data:[]
        }
        this.handleSearch = this.handleSearch.bind(this);
    }


    dataCallback = (data) => {
        console.log(data)
        if (data.status !== 200) {
            this.setState({"authenticated":false})
            localStorage.removeItem('myToken');
        }
    }

    postData = (url, myJSON, callback) => {
        fetch(url, {   method: 'POST',
            headers :new Headers(),
            body:JSON.stringify(myJSON)})
            .then( (response) => response.json() )
            .then( (data) => {
                console.log(data);
                this.setState({data:data.data})
            })
            .catch ((err) => {
                    console.log("something went wrong ", err)
                }
            );
    }


    componentDidMount() {
        const url = "http://unn-w18013241.newnumyspace.co.uk/kf6012/team/api/fire"
        if (localStorage.getItem('myToken')) {
            let myToken = localStorage.getItem('myToken')
            let myJSON = {
                "token":myToken,
            }
            console.log(myJSON);
            this.postData(url, myJSON, this.dataCallback)
        } else {
            this.setState({"authenticated":false})
        }
    }

    handleMoreClick = () => {
        this.setState({page:this.state.page+1})
    }

    handlePreviousClick = () => {
        this.setState({page:this.state.page-1})
    }

    handleNextClick = () => {
        this.setState({page:this.state.page+1})
    }

    handleSearch = (e) => {
        this.setState({page:1,query:e.target.value})
    }

    searchString = (s) => {
        return s.toLowerCase().includes(this.state.query.toLowerCase())
    }

    searchDetails = (details) => {
        return (this.searchString(details.date))
    }

    render() {

        let filteredData =  (
            this.state.data
                .filter(this.searchDetails)
        )

        let noOfPages = Math.ceil(filteredData.length/this.state.pageSize)
        if (noOfPages === 0) {noOfPages=1}
        let disabledPrevious = (this.state.page <= 1)
        let disabledNext = (this.state.page >= noOfPages)
        return (
            <div>
            <h1>Fire Department</h1>
        <Search query={this.state.query} handleSearch={this.handleSearch}/>
        {
            filteredData
                .slice(((this.state.pageSize*this.state.page)-this.state.pageSize),(this.state.pageSize*this.state.page))
                .map( (details, i) => (<FireDepartment key={i} details={details} />) )
        }
    <button onClick={this.handlePreviousClick} disabled={disabledPrevious}>Previous</button>
        Page {this.state.page} of {noOfPages}
    <button onClick={this.handleNextClick} disabled={disabledNext}>Next</button>
            </div>
    );
    }
}

export default FireDepartments;