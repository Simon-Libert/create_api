import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const contentStyle = {
	display: 'flex',
	flexwrap: 'wrap',
	padding: '3rem 3rem',
	justifyContent: 'center',
};

const hclayout = ({ children }) => {
	return (
		<Layout>
			<Header>
				<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
					<Menu.Item Key='1'>
						<Link to='/'>Accueil</Link>
					</Menu.Item>
					<Menu.Item Key='2'>
						<Link to='/rooms'>Chambres</Link>
					</Menu.Item>
					<Menu.Item Key='3'>
						<Link to='/about'>A propos</Link>
					</Menu.Item>
					<Menu.Item Key='4'>
						<Link to='/contact'>Contact</Link>
					</Menu.Item>
				</Menu>
			</Header>

			<Content style={contentStyle} children={children} />

			<Footer style={{ textAlign: 'center' }}>Api mes joies</Footer>
		</Layout>
	);
};

export default hclayout;
