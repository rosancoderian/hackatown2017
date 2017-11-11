// @flow
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import FbLoginButton from '../components/FbLoginButton'
//import { Transition } from 'react-transition-group'
//import { CSSTransition } from 'react-transition-group'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Index = (props) => (
	<Layout>
		<ul style={{ textAlign: 'center' }}>
			{props.jobs.map((job) => (
				<li className='card' key={job.id}>
					<Link as={`/job/${job.id}`} href={`/job?id=${job.id}`}>
						<div className='row'>
							<div className='heading col'>
								<strong className='org h6'>{job.organization}</strong>&nbsp;<small>mencari bantuan</small><br/>
								<a><h4 className='title'>{job.title}</h4></a>
							</div>
							<div className='meta col' style={{background:'#ff431d', color:'#fff'}}>
								<small style={{lineHeight: '14px'}}>3h ago</small>
								<div style={{fontSize: '48px', lineHeight: '24px', color:'#fff', margin: 0}}>&#x203a;</div>
								{/*
								*/}
							</div>
						</div>
					</Link>
					<style jsx>{`
						a { text-decoration: none; }
						li { 
							border-radius: 3px; 
							max-width: 30rem; 
							margin: 0 auto; 
							transition: transform linear .2s; 
						}
						li:hover { 
							transform: scale(1.15,1.15);
							cursor: pointer; 
							box-shadow: 0 5px 20px rgba(0,0,0,0.22), 0 5px 5px rgba(0,0,0,0.2);
						}
						li:not(:last-child) { margin-bottom: 1.5rem; }
						li,ul { -webkit-backface-visibility: hidden; -webkit-filter: blur(0px); transform: translate3d(0, 0, 0); }
						.meta,
						.heading {
							transition: all linear .2s; 
						}
						.meta {
							width: 0;
							padding: 0;
							opacity: 0;
						}
						li:hover .meta {
							width: 20%;
							padding: 1.2rem .6rem;
							opacity: 1;
						}
						.heading {
							width: 100%;
							padding: 1.2rem; 
						}
						li:hover .heading {
							width: 80%;
							padding: 1.2rem .6rem;
						}
						li:hover small {
							font-size: 80%;
						}
						.title, .org { 
							font-family: 'Work Sans', sans-serif;
						}
						.title { 
							color: #ff431d;
							margin: 0; 
							display: inline-block; 
							font-weight: 800;
						}
						.org { 
							color: #333; 
							font-weight: 700; 
						}
					`}</style>
				</li>
			))}
		</ul>
	</Layout>
)

Index.getInitialProps = async function() {
	//const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
	const res = await fetch('http://localhost:3004/jobs')
	const data = await res.json()

	console.log(`Data fetched. Count: ${data.length}`)

	return {
		jobs: data
	}
}

export default Index