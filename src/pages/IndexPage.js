import React from 'react';
import Section from '../components/Section';
import Tags from '../components/index/Tags';

const IndexPage = () => {
    return <section class="main">
        <Tags />
        <div class="sections">
            <Section />
            <Section />
            <Section />
        </div>
    </section>
};

export default IndexPage;