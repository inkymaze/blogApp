import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';


class PostsShow extends React.Component {
  componentDidMount() {
    // the If condition makes it easier on network usage if the details are called from the
    // index page already
    if (!this.props.post) {
    // pulls the id out of params
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });

  }


  render () {
    const { post } = this.props;

    if (!post) { return <div>Loading...</div>;}

    return (
      <div>
        <Link to="/">Back To Index</Link>

        <button className='btn btn-danger pull-xs-right'
          onClick={this.onDeleteClick.bind(this)}
          >
          DELETE POST 
        </button>
        <h2>{post.title}</h2>
        <h5>Categories: {post.categories}</h5>
        <p>{post.content}</p>
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

export default connect(mapStateToProps,{ fetchPost, deletePost })(PostsShow);
