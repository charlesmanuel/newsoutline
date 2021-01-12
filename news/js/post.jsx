import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import '../static/css/style.css'

class Post extends React.Component {
    /* Display number of likes and like/unlike button for one post
     * Reference on forms https://facebook.github.io/react/docs/forms.html
     */

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { post_title: "", post_url: "", post_source: "", post_bullets: [] };
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
        const renderBullets = post_bullets.map(
            (bullet) => <li>{bullet}</li>,
        );
        // Render number of likes
        return (
            <div style={{ padding: "40px 30px 30px", marginBottom: "20px", backgroundColor: "white!important", borderWidth: "3!important" }} className="post border border-dark rounded">
                <p>
                    {post_title}
                </p>
                <ul>{renderBullets}</ul>
            </div>
        );
    }
}

Post.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Post;