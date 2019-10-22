import React, { Component } from 'react';
import './style.css';

/* Request */
import { addComment } from 'Requsets/apiPost';
import { error500 } from 'Requsets/function';

/* Components */
import { Comment } from './Comment';

/* Redux */
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { addNewComment } from 'Store/Actions/actionPost';

class Comments extends Component {
  state = {
    text: '',
    status: '',
  };

  addComment() {
    const { text } = this.state;
    if (text.trim() === '') {
      this.setState({ status: 'Напишите комментарий' });
      return;
    }
    this.setState({ status: 'Пожалуйста, подождите...' });
    addComment(this.props.postId, text)
      .then(res => {
        this.props.addNewComment(res.data);
        this.setState({
          text: '',
          status: 'Ваш комментарий опубликован',
        });
      })
      .catch(err => error500(err));
  }

  render() {
    const { comments } = this.props;
    const { status, text } = this.state;
    return (
      <div className="comment_box">
        {comments && comments.length !== 0 && (
          <h3 className="title_h3 h3_com">
            Комментарии <i>{comments.length}</i>
          </h3>
        )}
        {comments && comments.map((el, i) => <Comment el={el} key={i} />)}
        <h3 className="title_h3">Написать комментарий</h3>
        <div className="send_comment">
          <textarea
            onChange={e => this.setState({ text: e.target.value })}
            value={text}
            placeholder="Ваш комментарий"
          />
          <div className="send_comment_panel">
            <button className="blue_button" onClick={() => this.addComment()}>
              Отправить
            </button>
            <p className="status_p">{status}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPost: state.post.currentPost,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewComment: bindActionCreators(addNewComment, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
