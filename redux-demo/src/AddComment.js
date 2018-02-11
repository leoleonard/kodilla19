import React from 'react';
import addComment from './actions';
import store from './index';
import './AddComment.css';

let textInput = '';
const AddComment = () =>
			<form onSubmit={(e) => {
               e.preventDefault();
               store.dispatch(addComment(textInput.value));
               textInput.value='';
            }} >
            <input type={'text'} className="textInput" ref={(input) => { textInput = input; }} />
            <br/>
            <input type={'submit'} value={'Dodaj komentarz'} />
        </form>
;

export default AddComment;
