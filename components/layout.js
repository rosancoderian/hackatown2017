// @flow
import type {Element} from 'React'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import firebase from 'firebase'

type Props = {
	children?: Element<any>,
	title?: string
}

try {
  let config = {
    apiKey: "AIzaSyBQSUZkiKkz70i9nIlG-e4Z1TRhU-uN3Xc",
    authDomain: "hackatown2017-bf7dd.firebaseapp.com",
    databaseURL: "https://hackatown2017-bf7dd.firebaseio.com",
    projectId: "hackatown2017-bf7dd",
    storageBucket: "hackatown2017-bf7dd.appspot.com",
    messagingSenderId: "648683273287"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
} catch (err) {
  console.log(err)
}

export default ({children, title = 'sumbangkarya — Donate your skills for a good cause, gain experience'}: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link href='https://cdnjs.cloudflare.com/ajax/libs/kube/6.5.2/css/kube.min.css' rel='stylesheet' />
			<link href='/static/base.css' rel='stylesheet' />
			<link href='https://fonts.googleapis.com/css?family=Open+Sans:400' rel='stylesheet' />
			<link href='https://fonts.googleapis.com/css?family=Work+Sans:400,700,800' rel='stylesheet' />
			{/*
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
			*/}
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
