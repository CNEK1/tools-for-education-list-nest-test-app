import Button from '@/components/Button/Button';
import Htag from '@/components/HTAG/Htag';
import Paragraph from '@/components/paragraph/Paragraph';
import Raiting from '@/components/Raiting/Raiting';
import Tag from '@/components/Tag/Tag';
import { MenuItem } from '@/interfaces/menu.interface';
import Menu from '@/layout/Menu/Menu';
import axios from 'axios';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import withLayout from '../layout/Layout';

function Home({menu}:HomeProps): JSX.Element {
    const [raiting, setRaiting] = useState<number>(0);

    return (
        <>
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
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find/", {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
