import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Post from './post';
import Container from 'react-bootstrap/Container';
import '../static/css/style.css';
import { Grid, Row, Col } from "react-bootstrap";


class Posts extends React.Component {
    /* Display number of likes and like/unlike button for one post
     * Reference on forms https://facebook.github.io/react/docs/forms.html
     */

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { nextURL: '', posts: [], hasMore: false };
        // this.fetchMoreData = this.fetchMoreData.bind(this);
    }
    componentDidMount() {
        if (window.history.state != null && String(window.performance.getEntriesByType('navigation')[0].type) === 'back_forward') {
            this.setState({ ...window.history.state });
            return;
        }
        // This line automatically assigns this.props.url to the const variable url
        const { url } = this.props;
        const { posts } = this.state;

        // Call REST API to get number of likes
        fetch(url, { credentials: 'same-origin' })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    posts: posts.concat(data.post_list)
                });
                /* if (data.next.length === 0) {
                    this.setState({
                        hasMore: false,
                    });
                } */
            }).then(() => { window.history.pushState({ ...this.state }, document.title); })
            .catch((error) => console.log(error));
    }
    render() {
        const { posts } = this.state;
        var url_start = "/api/post/"
        const renderPosts = posts.map(
            (post) => <Post key={post} url={url_start.concat(post)} />,
        );
        return (
            <div>{renderPosts}</div>
        );
    }
}

const PostContainer = () => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Posts url="/api/posts/0/" />
                </Col>
                <Col xs={6} md={4}>
                    <Posts url="/api/posts/1/" />
                </Col>
                <Col xs={6} md={4}>
                    <Posts url="/api/posts/2/" />
                </Col>
            </Row>
        </Container>
    )
}

// This method is only called once
ReactDOM.render(
    // Insert the likes component into the DOM
    <PostContainer></PostContainer>,
    document.getElementById('reactEntry'),
);