import React, {Component} from "react";
import PropTypes from "prop-types";

class Clock extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type={"text"}/>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}

Clock.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
}

Clock.defaultProps = {
    name : "No name",
    salary : 1000,
    department : "No department",
}

export default Clock;