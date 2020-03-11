import React, { Component } from "react";
import { connect } from "react-redux";

class Reddit extends Component {
  render() {
    const { posts, isLoading, err } = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (err) {
      return <div>{err.message}</div>;
    }
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <span>{post.score}</span>
            <div>
              <h2>{post.title}</h2>
              <div>{post.num_comments} comments</div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapState = state => ({
  posts: state.counter.posts,
  isLoading: state.counter.isLoading,
  err: state.counter.err
});
export default connect(mapState)(Reddit);
