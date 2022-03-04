import React from 'react';
import {useStyles} from './ContentItem.styles';
import ContentNode from "../ContentNode/ContentNode";

const ContentItem = ({state}) => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <ContentNode node={state.mainImage} className={styles.leadImage}/>
            <h1 className={styles.title}>
                <ContentNode node={state.heading}/>
            </h1>
            <div className={styles.info}>
                <h2 className={styles.author}>
                    <span>Author name:</span>
                    <span><ContentNode node={state.author}/></span>
                </h2>
                <h2>
                    <span>Created: </span>
                    <ContentNode node={state.date}/>
                </h2>
            </div>
            <ContentNode node={state.body}/>
        </div>
    );
};

export default ContentItem;