import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body}=post;
    const navigate = useNavigate();

    const postStyle = {
        border:"4px solid yellow",
        padding: "10px",
        borderRadius: "20px",
        margin:"8px"

    }

    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post ${id}`}>Post Detail</Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};
Post.propTypes ={
    post:PropTypes.object
}

export default Post;