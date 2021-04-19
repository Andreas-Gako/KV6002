import React from 'react'

class FireDepartment extends React.Component {

    state = {
        display:false,
        displayFurther:false
    }

    handleContetClick = () => {
        this.setState({display:!this.state.display})
    }

    handleDetailClick = () => {
        this.setState({displayFurther:!this.state.displayFurther})
    }

    render() {

        let info = "";
        let furtherInfo = "";



        if (this.state.display) {
            info = <div>
            <p onClick={this.handleDetailClick}>
                <b>Temperature:</b> {this.props.details.temperature}
            {<br />}
            {<br />}
                <b>Potential Fire:</b>{this.props.details.fire}
            {<br />}
            {<br />}
                <b>Water:</b>{this.props.details.water}
            {<br />}
            {<br />}
                <b>Location:</b>{this.props.details.gpsx}, {this.props.details.gpsx}

            </p>

            {furtherInfo}
        </div>
        }

        return (
            <div>
            <h2 onClick={this.handleContetClick}> <b>Date</b>{this.props.details.date}</h2>
        {info}
        </div>
    );
    }
}
export default FireDepartment;