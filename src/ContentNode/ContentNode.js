import React from 'react';

const ContentNode = ({node, className}) => {

    const convertDate = (date) =>
        new Date(date)
            .toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
            })

    switch (node.elementType) {
        case 'text':
            return <span>{node.value}</span>
        case 'datetime':
            return <span>{convertDate(node.value)}</span>
        case 'formattedtext':
            return <div dangerouslySetInnerHTML={{__html: node.values.join('')}}/>
        case 'group':
            return <figure>
                <img className={className}
                     src={`https://content-eu-4.content-cms.com/${node.value.leadImage.url}`}
                     alt={node.value.leadImageCaption.value}
                />
                <figcaption>{node.value.leadImageCaption.value}</figcaption>
            </figure>
        default:
            return <span>Error</span>
    }
};

export default ContentNode;