import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';


class PostsShow extends React.Component {
  componentDidMount() {
    // pulls the id out of params
    const { id } = this.props.match.params;
    this.props.fetchPost();
  }


  render () {
    return (
      <div>
        Posts Show!
      </div>
    );
  }
}

// ownprops is just convenetion
// ownprops gets all the props that were passed to PostsShow
//  this refractor is more useful when using container files

function mapStateToProps({ posts }, ownProps) {
  return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{ fetchPost })(PostsShow);
