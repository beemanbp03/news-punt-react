import react, {Fragment} from 'react';
import logo from '../logo.svg';
import classes from './NewsCard.css';

const NewsCard = () => {

    return (
    <Fragment>
        <a class="news-card">
            <h2>Example Title</h2>
            <img class="news-card-thumbnail" src={logo} />
            <p>Publish Date</p>
        </a>
    </Fragment>
    )
}

export default NewsCard;