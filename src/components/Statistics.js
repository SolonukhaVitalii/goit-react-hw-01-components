import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ title, stats }){
    return (
        <section class="statistics">
            {title && <h2 className="title">Upload stats</h2>}

            <ul className="stat-list">
                <li className="item">
                    <span className="label">.docx</span>
                    <span className="percentage">{stats.docx}</span>
                </li>
                <li className="item">
                    <span className="label">.mp3</span>
                    <span className="percentage">{stats.mp3}</span>
                </li>
                <li className="item">
                    <span className="label">.pdf</span>
                    <span classNames="percentage">{stats.pdf}</span>
                </li>
                <li className="item">
                    <span className="label">.mp4</span>
                    <span className="percentage">{stats.mp4}</span>
                </li>
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.node.isRequired,
};

Statistics.defaultProps = {
    title: '',
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            docx: 0,
            mp3: 0,
            pdf: 0,
            mp4: 0,
        }))
};

export default Statistics;