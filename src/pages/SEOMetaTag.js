import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTag = props => {
    return(
        <Helmet>
            <title>
                {props.title}
            </title>
            <meta name="description" content={props.description}/>
            <meta name="keywords" content={props.keywords}/>
            <meta name='og:type' content="website"/>
            <meta property="og:site_name" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={"https://mbti-travel-test.netlify.app/img/hiker-travel.jpg"} />
            <meta property="og:url" content={props.url} />

        </Helmet>
    )
}

export default MetaTag;