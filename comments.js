function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text
                votes: 0
            }
            , ...state.comments];

        case EDIT_COMMENT:
          return [{
            id: action.id,
            text: action.text
          }
          , ...state.comments];

        case REMOVE_COMMENT:
          return [{
            id: action.id
          }
        , ...state.comments];

        case THUMB_UP_COMMENT:
          return [{
            id: action.id
          }
        , ...state.comments];

        case THUMB_DOWN_COMMENT:
          return [{
            id: action.id
          }
        , ...state.comments];
    }
}

export comments();
