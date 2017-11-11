// @flow
import type {Element} from 'React'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

type Props = {
	children?: Element<any>,
	title?: string
}

export default ({children, title = 'Donate your skills for a good cause, gain experience'}: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link href='https://cdnjs.cloudflare.com/ajax/libs/kube/6.5.2/css/kube.min.css' rel='stylesheet' />
			<link href='/static/base.css' rel='stylesheet' />
			<link href='https://fonts.googleapis.com/css?family=Open+Sans:400' rel='stylesheet' />
			<link href='https://fonts.googleapis.com/css?family=Work+Sans:400,700,800' rel='stylesheet' />
		</Head>
		<Header />
		<main role='main'>{children}</main>
		<Footer />
		<style jsx global>{`
			a { cursor: pointer; } 
			body { 
				background: #80DEEA; 
				font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; 
			}
			main { min-height: 69vh; margin-top: 6rem; }
			ul { padding-left: 0; list-style-type: none; } 
		`}</style>
	</div>
)