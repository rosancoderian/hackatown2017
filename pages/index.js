// @flow
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import FbLoginButton from '../components/FbLoginButton'
import firebase from 'firebase'
import JobList from '../components/JobList'

//import { Transition } from 'react-transition-group'
//import { CSSTransition } from 'react-transition-group'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Index = (props) => (
	<Layout>
    <JobList />
	</Layout>
)

// Index.getInitialProps = async function() {
// 	//const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
// 	const res = await fetch('http://localhost:3004/jobs')
// 	const data = await res.json()
//
// 	console.log(`Data fetched. Count: ${data.length}`)
//
// 	return {
// 		jobs: data
// 	}
// }

export default Index
