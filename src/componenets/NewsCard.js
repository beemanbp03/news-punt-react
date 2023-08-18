import react, {Fragment} from 'react';
import logo from '../logo.svg';
import classes from './NewsCard.css';

const NewsCard = () => {

    return (
    <Fragment>
        <a className="news-card">
            <h2>Example Title</h2>
            <img className="news-card-thumbnail" src={logo} />
            <p>Publish Date</p>
        </a>
    </Fragment>
    )
}

export default NewsCard;