import React, { Component } from 'react';
import './style.css';

/* Module */
import Chip from '@material-ui/core/Chip';

/* Request */
import { publishPost } from 'Requsets/apiPost';
import { error500 } from 'Requsets/function';

/* Redux */
import { bindActionCreators } from 'redux';
import { changePage } from 'Requsets/function';
import { pushNewPost } from 'Store/Actions/actionPost';
import connect from 'react-redux/es/connect/connect';

class Publish extends Component {
  state = {
    title: '',
    tags: '',
    text: '',
    status: '',
    tagsData: ['Bobr'],
  };

  writeTag(char) {
    let searchIndex = char.indexOf(' ');
    if (searchIndex !== -1) {
      if (char === ' ') return false;
      let tagsArray = this.state.tagsData;
      tagsArray.push(char.trim());
      this.setState({ tagsData: tagsArray, tags: '' });
    } else {
      this.setState({ tags: char });
    }
  }

  handleDelete = data => () => {
    this.setState(state => {
      const tagsData = [...state.tagsData];
      const chipToDelete = tagsData.indexOf(data);
      tagsData.splice(chipToDelete, 1);
      return { tagsData };
    });
  };

  successSend(newPost) {
    this.props.pushNewPost(newPost);
    this.setState({
      status: 'Новость опубликована',
      tagsData: ['Bobr'],
      title: '',
      tags: '',
      text: '',
    });
  }

  sentPost() {
    this.setState({ status: 'Пожалуйста, подождите...' });
    if (!this.checkData()) return false;
    const { title, text, tagsData } = this.state;
    publishPost(title, text, tagsData)
      .then(res => {
        this.successSend(res.data);
      })
      .catch(err => error500(err));
  }

  checkData() {
    const { title, text, tagsData } = this.state;
    if (title === '' || tagsData.length === 0 || text === '') {
      this.setState({ status: 'Введите все данные' });
      return false;
    }
    return true;
  }

  componentDidMount() {
    changePage('publish');
  }

  render() {
    const { title, tags, text, status } = this.state;
    return (
      <section className="publish_page">
        <h3 className="title_h3 title_pages">Опубликовать новость</h3>
        <aside className="publish_label">
          <label>Название новости</label>
          <input
            type="text"
            placeholder="Заголовок..."
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </aside>
        <aside className="publish_label">
          <label>Теги (через пробел)</label>
          <div className="tags_aside">
            <input
              type="text"
              placeholder="Введите тег..."
              value={tags}
              onChange={e => this.writeTag(e.target.value)}
            />
          </div>
        </aside>
        <aside className="tags_array">
          {this.state.tagsData.map((data, i) => {
            return (
              <Chip key={i} className="new_tag" label={data} onDelete={this.handleDelete(data)} />
            );
          })}
        </aside>
        <aside className="publish_label">
          <label>Текст</label>
          <textarea
            placeholder="Текст новости..."
            value={text}
            onChange={e => this.setState({ text: e.target.value })}
          />
        </aside>
        <div className="send_publish_panel">
          <button className="blue_button publish_form" onClick={() => this.sentPost()}>
            Опубликовать
          </button>
          <p className="status_p">{status}</p>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pushNewPost: bindActionCreators(pushNewPost, dispatch),
  };
};

export default connect(
  '',
  mapDispatchToProps,
)(Publish);
