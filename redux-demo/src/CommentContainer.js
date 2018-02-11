// dzielennie stanu na odpowiednie propsy
// przekazywanie propsow do CommentsLists
import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment} from './actions';
import {thumbDownComment} from './actions';
import {deleteComment} from './actions';
import './CommentContainer.css'


const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  deleteComment: (id) => dispatch(deleteComment(id)),
});

export default connect(null, mapDispatchToProps)(Comment);
