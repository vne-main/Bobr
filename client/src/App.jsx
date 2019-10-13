import React, { Component } from 'react';

/* Module */
import { Route, BrowserRouter, Switch } from 'react-router-dom';

/* Components */
import { Footer, Header, CatchError, RightColumn } from './Common';
import { Chat, Different, Home, NotFound, Post, Profile, Publish, Search, Users } from './Pages';
import SignIn from './Pages/Auth/signin';
import SignUp from './Pages/Auth/signup';
import Statistics from './Pages/Different/Statistics';
import Help from './Pages/Different/Help';
import Advertising from './Pages/Different/Advertising';
import Work from './Pages/Different/Work';
import Documentation from './Pages/Different/Documentation';
import About from './Pages/Different/About';

/* Redux */
import { bindActionCreators } from 'redux';
import { changeWindowWidth } from './Store/Actions/actionMain';
import { getUser } from './Store/Actions/actionUser';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    document.getElementById('preloader').remove();
    window.addEventListener('resize', this.props.changeWindowWidth);
  }

  render() {
    const { currentPage, windowWidth } = this.props;
    const notRightColumn = ['auth', 'profile', 'channels'];
    const notFooter = ['auth'];
    return (
      <BrowserRouter>
        <div className={currentPage === 'auth' ? 'vh_block_auth' : 'vh_block'}>
          <div>
            {currentPage !== 'auth' && <Header />}
            <main className="container main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/post" component={Post} />
                <Route path="/publish" component={Publish} />
                <Route path="/users" component={Users} />
                <Route path="/profile" component={Profile} />
                <Route path="/search" component={Search} />
                <Route path="/chat" component={Chat} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/different" component={Different} />
                <Route path="/statistics" component={Statistics} />
                <Route path="/help" component={Help} />
                <Route path="/advertising" component={Advertising} />
                <Route path="/work" component={Work} />
                <Route path="/documentation" component={Documentation} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
              {notRightColumn.indexOf(currentPage) === -1 && windowWidth > 800 && <RightColumn />}
            </main>
            <CatchError />
          </div>
          {notFooter.indexOf(currentPage) === -1 && <Footer />}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.main.currentPage,
    windowWidth: state.main.windowWidth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeWindowWidth: bindActionCreators(changeWindowWidth, dispatch),
    getUser: bindActionCreators(getUser, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
