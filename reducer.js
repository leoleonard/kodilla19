import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';





const initialState = {
  comments: [],
  users: []
}


function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
            })
        default:
            return state;

        case REMOVE_COMMENT:
          return Object.assign({}, state, {
            comments: state.comments.filter(comment => comment.id !== action.id)
          });
          default:
            return state;

        case EDIT_COMMENT:
          return Object.assign({}, state, {
            comments: [
              {
                id: action.id,
                text: action.text
              }
              , ...state]
          })
          default:
              return state;

          case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
              comments: [
                id: action.id,
                votes: votes++
                , ...state ]
            })
            default
              return state;

              case THUMB_DOWN_COMMENT:
                return Object.assign({}, state, {
                  comments: [
                    id: action.id,
                    votes: votes--
                    , ...state ]
                })
                default
                  return state;

            }
          }
