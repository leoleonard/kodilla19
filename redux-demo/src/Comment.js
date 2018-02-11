// Pojedynczy komponent
// text - zawartosc komentarza
// votes

import React from 'react';


const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, deleteComment}) =>
 <li>
{text}
<span> votes: {votes}</span>
<button onClick={() => thumbUpComment(id)}>Thumb up</button>
<button onClick={() => thumbDownComment(id)}>Thumb down</button>
<button className="remove" onClick={() => deleteComment(id)}>x</button>
 </li>;

export default Comment;
