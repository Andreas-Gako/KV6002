import React from 'react'

/**
 * This class is responsible to diaplay the data colected from the API endpoint.
 * All data is collapsed showing only the name of the date of the record. If the name is clicked more data are expanded.
 * Additionally the event listener handleUpdateClick is responsible for posting the nickname whenever the update button is pressed
 */
class Sensor extends React.Component {

    state = {
        display:false,
        displayFurther:false,
        nickname: this.props.details.nickname
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

    handleUpdateClick = (deviceId, nickname) => {
        const url = "http://unn-w18013241.newnumyspace.co.uk/kf6012/team/api/update"
        if (localStorage.getItem('myToken')) {
            let myToken = localStorage.getItem('myToken')
            let myJSON = {
                "token":myToken,
                "deviceId":deviceId,
                "nickname":nickname
            }
            this.postData(url, myJSON, this.dataCallback)
        } else {
            this.setState({"authenticated":false})
        }
    }

    handleContetClick = () => {
        this.setState({display:!this.state.display})
    }

    handleDetailClick = () => {
        this.setState({displayFurther:!this.state.displayFurther})
    }

    handleNicknameChange = (e) => {
        this.setState({nickname:e.target.value})
    }

    handleNicknameUpdate = () => {
        this.handleUpdateClick(this.props.details.deviceId, this.state.nickname)
    }
    render() {

        let info = "";
        let furtherInfo = "";

        if (this.state.display) {
            info = <div>
            <p onClick={this.handleDetailClick}>
                <b>Nickname: </b> <textarea
            rows="1" cols="20"
            value={this.state.nickname}
            onChange={this.handleNicknameChange}/>
            <button onClick={this.handleNicknameUpdate}>Update</button>
            {<br />}
            {<br />}
                <b>Potential Fire: </b>{this.props.details.fire}
            {<br />}
            {<br />}
                <b>Water Level: </b>{this.props.details.water}<b>mm</b>
            {<br />}
            {<br />}
                <b>Humidity: </b>{this.props.details.humidity}
            {<br />}
            {<br />}
                <b>Temperature: </b>{this.props.details.temperature}
            </p>

            {furtherInfo}
        </div>
        }

        return (
            <div>
            <h2 onClick={this.handleContetClick}>
            <b>Device ID: </b>{this.props.details.deviceId}
        {<br />}
            <b>Date: </b>{this.props.details.date}</h2>
        {info}
    </div>
    );
    }
}
export default Sensor;