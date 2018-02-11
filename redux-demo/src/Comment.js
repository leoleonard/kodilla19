// Pojedynczy komponent
// text - zawartosc komentarza
// votes

import React from 'react';
import {Icon} from 'react-fa'


const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, deleteComment}) =>
 <li>
{text}
<span> votes: {votes}</span>
<button className="fa fa-thumbs-up" onClick={() => thumbUpComment(id)}></button>
<button className="fa fa-thumbs-down" onClick={() => thumbDownComment(id)}></button>
<button className="fa fa-remove remove" onClick={() => deleteComment(id)}></button>
 </li>;

export default Comment;
