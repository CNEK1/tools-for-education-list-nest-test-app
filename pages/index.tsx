import Button from '@/components/Button/Button';
import Htag from '@/components/HTAG/Htag';
import Paragraph from '@/components/paragraph/Paragraph';
import Raiting from '@/components/Raiting/Raiting';
import Tag from '@/components/Tag/Tag';
import React, { useState } from 'react';
import withLayout from '../layout/Layout';

function Home(): JSX.Element {
    const [raiting, setRaiting] = useState<number>(0);

    return (
        <div>
            <Htag tag="h1">test1</Htag>
            <Htag tag="h2">test2</Htag>
            <Htag tag="h3">test3</Htag>

            <Button appereance="primary" arrow="right">
                Button1
            </Button>
            <Button appereance="ghost" arrow="down">
                Button1
            </Button>

            <Paragraph size="sm">Test1</Paragraph>
            <Paragraph size="md">Test1</Paragraph>
            <Paragraph size="lg">Test1</Paragraph>

            <Tag size="sm" color="red">
                Tag1
            </Tag>
            <Tag size="md" color="green">
                Tag2
            </Tag>
            <Tag color="primary">Tag3</Tag>

            <Raiting raiting={4} />
            <Raiting raiting={2} />
            <Raiting raiting={raiting} isEditable={true} setRaiting={setRaiting} />
        </div>
    );
}

export default withLayout(Home);
