// @flow

import type {Element} from 'React'
import Link from 'next/link'
import Head from 'next/head'
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

export default ({children, title = 'code4justice.io'}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    <header>
    </header>
    {children}
    <footer>
    </footer>
  </div>
)
