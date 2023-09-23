import { Link } from "react-router-dom";
import PropTypes from 'prop-types';  

const User = ({user}) => {

    const userStyle = {
        border:"4px solid yellow",
        padding: "10px",
        borderRadius: "20px",
        margin:"8px"

    }

    const {id, name, email, phone} = user;
    return (
        <div style={userStyle}>
            <h1>{name}</h1>
            <p>phone: {phone}</p>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

User.propTypes ={
    user: PropTypes.object
}



export default User;