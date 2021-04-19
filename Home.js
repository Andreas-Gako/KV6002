import React from 'react';

/**
 * A main home class that contains general information for this application, inncluding how to use.
 */
class Home extends React.Component {

    render() {
        return (

        <p>This application was designed by Andreas Gakopoulos as part of the 2020/21 KV6002 module at Northumbria University.
            To use the application you need to sign in as either of two types of users.
            The details needed in order to sign in are availble in the database under the users table.
            The Device page is for the individual owners, and the fire depoartment is for the fire department only.
            The device page contains the device ID, the nickname, potential fire, water level, temporature, humidity and date.
            The fire department contains location fire temprature and water level.</p>

            )
    }
}

export default Home;