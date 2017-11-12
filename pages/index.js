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
		<div className='row'>
			<div className='col col-3' style={{textAlign: 'right'}}>
				<div style={{position:'fixed', left:0}}>
					<div className='h5' style={{background:'#000', color:'#fff', display:'inline-block', padding:'8px 16px'}}>keterampilan saya...</div>
					<ul className="cat-list h5" style={{textAlign:'left', paddingLeft:20}}>
						<li><a href="#">web development</a></li>
						<li><a href="#">web/graphic design</a></li>
						<li><a href="#">social media</a></li>
						<li><a href="#">photography</a></li>
						<li><a href="#">copywriting</a></li>
					</ul>
				</div>
				<style jsx>{`
					.cat-list { margin-top: 1rem; font-weight: 700; }
					.cat-list li a { text-decoration: none; }
				`}</style>
			</div>
			<div className='col col-6'>
				<JobList />
			</div>
			<div className='col col-3'>
			</div>
		</div>
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
