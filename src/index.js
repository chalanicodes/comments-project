import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import logo from "./logo7.jpeg";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post"
        avatar={faker.image.image()}
        icon={logo}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        content="I like the subject"
        avatar={faker.image.image()}
        icon={logo}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="I like the writing"
        avatar={faker.image.image()}
        icon={logo}
      />
      <CommentDetail
        author="Chalani"
        timeAgo="Today at 9:00PM"
        content="I like coding"
        avatar={faker.image.image()}
        icon={logo}
      />
      <CommentDetail
        author="Phil"
        timeAgo="Today at 9:10PM"
        content="I love dinner"
        avatar={faker.image.image()}
        icon={logo}
      />
      <CommentDetail
        author="Kylie"
        timeAgo="Tomorrow at 8:10PM"
        content="I love teaching"
        avatar={faker.image.image()}
        icon={logo}
      />
      <CommentDetail
        author="Charlotte"
        timeAgo="Today at 3:00PM"
        content="I love visiting different places"
        avatar={faker.image.image()}
        icon={logo}
      />
      <CommentDetail
        author="Anoma"
        timeAgo="Today at 10:30PM"
        content="I love gardenning"
        avatar={faker.image.image()}
        icon={logo}
      />
      <CommentDetail
        author="Julia"
        timeAgo="Tomorrow at 5:30PM"
        content="I like meeting people"
        avatar={faker.image.image()}
        icon={logo}
      />
      <CommentDetail
        author="Daniel7"
        timeAgo="Today at 7:30PM"
        content="I love sport"
        avatar={faker.image.image()}
        icon={logo}
       
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));