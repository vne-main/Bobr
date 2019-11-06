import React, { Component } from "react";

/* Const */
import { PAGES_URL, NOT_RIGHT_COLUMN, AUTH_URLS } from "Const/pages";

/* Module */
import { Route, BrowserRouter, Switch } from "react-router-dom";

/* Components */
import { Footer, Header, CatchError, RightColumn } from "./Common";

/* Pages */
import SignIn from "./Pages/Auth/signin";
import SignUp from "./Pages/Auth/signup";
import { Chat, Different, Home, NotFound, Post, Profile, Publish, Search, Users } from "./Pages";
import { Advertising, About, Documentation, Statistics, Help, Work } from "./Pages/Different/pages";

/* Redux */
import { bindActionCreators } from "redux";
import { changeWindowWidth } from "./Store/Actions/actionMain";
import { getUser } from "./Store/Actions/actionUser";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    document.getElementById("preloader").remove();
    window.addEventListener("resize", this.props.changeWindowWidth);
  }

  render() {
    const { currentPage, windowWidth } = this.props;
    return (
      <BrowserRouter>
        <div className={AUTH_URLS.indexOf(currentPage) !== -1 ? "vh_block_auth" : "vh_block"}>
          <>
            {AUTH_URLS.indexOf(currentPage) === -1 && <Header />}
            <main className="container main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path={PAGES_URL.signin} component={SignIn} />
                <Route path={PAGES_URL.signup} component={SignUp} />
                <Route path={PAGES_URL.post} component={Post} />
                <Route path={PAGES_URL.publish} component={Publish} />
                <Route path={PAGES_URL.users} component={Users} />
                <Route path={PAGES_URL.profile} component={Profile} />
                <Route path={PAGES_URL.search} component={Search} />
                <Route path={PAGES_URL.chat} component={Chat} />
                <Route path={PAGES_URL.different} component={Different} />
                <Route path={PAGES_URL.statistics} component={Statistics} />
                <Route path={PAGES_URL.help} component={Help} />
                <Route path={PAGES_URL.advertising} component={Advertising} />
                <Route path={PAGES_URL.work} component={Work} />
                <Route path={PAGES_URL.documentation} component={Documentation} />
                <Route path={PAGES_URL.about} component={About} />
                <Route component={NotFound} />
              </Switch>
              {NOT_RIGHT_COLUMN.indexOf(currentPage) === -1 && windowWidth > 800 && <RightColumn />}
            </main>
            <CatchError />
          </>
          {AUTH_URLS.indexOf(currentPage) === -1 && <Footer />}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.main.currentPage,
    windowWidth: state.main.windowWidth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeWindowWidth: bindActionCreators(changeWindowWidth, dispatch),
    getUser: bindActionCreators(getUser, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
