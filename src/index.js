import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => (
  <div className="ui container comments">
    <CommentDetail
      author="Sam"
      timeAgo="Today at 4.45PM"
      commentText="Nice blog post!"
      avatarImage={faker.image.image()}
    />
    <CommentDetail
      author="Alex"
      timeAgo="Today at 2.00AM"
      commentText="Nice try"
      avatarImage={faker.image.image()}
    />
    <CommentDetail
      author="Jane"
      timeAgo="Yesterday at 5:00PM"
      commentText="Nice post!"
      avatarImage={faker.image.image()}
    />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
