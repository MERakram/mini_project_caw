import {useState} from "react";

function Comments() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const onClickHandler = () => {
        setComments((comments) => [...comments, comment]);
    };
    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };
    return (
        <div>
            <div className="comment-flexbox">
                <h3>Comment</h3>
                <textarea
                    value={comment}
                    onChange={onChangeHandler}
                    className="input-box"
                />
                <button onClick={onClickHandler} className="comment-button">
                    Submit
                </button>
            </div>
            {comments.map((text) => (
                <div>{text}</div>
            ))}
        </div>
    );
}

export default Comments;