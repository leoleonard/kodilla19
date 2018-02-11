import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';


export function addComment(text) {
  return {
    type: ADD_COMMENT,
    text: text,
    id: uuid.v4()
  }
}

export function editComment(commentId, text) {
  return {
    type: EDIT_COMMENT,
    id: commentId,
    text
  }
}

export function deleteComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    id: commentId
  }
}

// typ akcji
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
// kreator akcji
export function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}


export default addComment;
