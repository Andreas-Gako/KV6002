import React from 'react'

/**
 *  Select space is responsible for creating a select bar with the options "TRUE" and "FLASE".
 */
class SelectState extends React.Component {
    render() {
        return (
            < label >
            Probability of fire:
    <select value = {this.props.fire}
        onChange = {this.props.handleStateSelect}>
            < option
        value = ""> Any < /option>
            < option
        value = "TRUE" > True < /option>
            < option
        value = "FALSE" > False < /option>
            </select>
            </label>
    )
    }
}
export default SelectState;