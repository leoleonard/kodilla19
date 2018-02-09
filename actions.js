import uuid from 'uuid';

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  }
}

function deleteComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  }
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  }
}


const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(id, text));
const boundDeleteComment = text => dispatch(deleteComment(id));
const boundThumbUpComment = text => dispatch(thumbUp(id));
const boundThumbDownComment = text => dispatch(thumnDown(id));
