import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { CSSTransition } from 'react-transition-group';
import '../static/css/style.css'

class Post extends React.Component {
    /* Display number of likes and like/unlike button for one post
     * Reference on forms https://facebook.github.io/react/docs/forms.html
     */

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { post_title: "", post_url: "", post_source: "", post_bullets: [], showBullets: false };
        this.showBullets = this.showBullets.bind(this);
    }
    showBullets(event) {
        const { showBullets } = this.state;
        // event.preventDefault();
        if (showBullets) {
            this.setState({
                showBullets: false
            });
        }
        else {
            this.setState({
                showBullets: true
            });
        }
    }

    componentDidMount() {
        // This line automatically assigns this.props.url to the const variable url
        const { url } = this.props;
        const { post_bullets } = this.state;
        // Call REST API to get number of likes
        fetch(url, { credentials: 'same-origin' })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
                console.log(response.json());
            })
            .then((data) => {
                this.setState({
                    post_title: data.post_title,
                    post_source: data.article_source,
                    post_url: data.article_url,
                    post_bullets: post_bullets.concat(data.article_bullets)
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        // This line automatically assigns this.state.numLikes to the const variable numLikes
        const { post_title } = this.state;
        const { post_bullets } = this.state;
        const { showBullets } = this.state;
        const { post_url } = this.state;
        const { post_source } = this.state;
        const renderBullets = post_bullets.map(
            (bullet) => <li>{bullet}</li>,
        );
        // Render number of likes
        return (
            <div className="post border border-dark rounded articleBox articleTitle" onClick={this.showBullets}>
                <b>
                    {post_title}
                </b>
                <br></br>
                <div className="articleSource">
                    <a href={post_url} target="_blank"><img className={"ArticleSource " + post_source} src={"/static/img/" + post_source + ".png"}></img></a>
                </div>
                <CSSTransition
                    in={showBullets}
                    timeout={350}
                    classNames="display"
                    unmountOnExit
                >
                    <div>
                        {renderBullets}
                    </div>
                </CSSTransition>
            </div >
        );
    }
}

Post.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Post;