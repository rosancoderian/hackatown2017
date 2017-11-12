// @flow

import {Component} from 'react'
import * as firebase from 'firebase'
import Link from 'next/link'

export default class JobList extends Component {
  state: Object
  constructor(props: Object) {
    super(props)
    this.state = {
      jobs: []
    }
  }
  async componentDidMount () {
    let result = await firebase.database().ref('/jobs/').once('value')
    let jobs = result.val()
    this.setState({
      jobs: jobs.map((job) => {
        return job
      })
    })
  }
  render () {
    if(this.state.jobs.length === 0) return <h3 style={{ textAlign: 'center' }}>Loading Data...</h3>
    return <ul style={{ textAlign: 'center' }}>
			{this.state.jobs.map((job) => (
				<li className='card' key={this.state.jobs.indexOf(job)}>
					<Link as={`/job/${this.state.jobs.indexOf(job)}`} href={`/job?id=${this.state.jobs.indexOf(job)}`}>
						<div className='row'>
							<div className='heading col'>
								<strong className='org h6 text-truncate'>{job.organization}</strong>&nbsp;<small>membutuhkan</small><br/>
								<a><h4 className='title text-truncate'>{job.title}</h4></a>
							</div>
							<div className='meta col' style={{background:'#ff431d', color:'#fff'}}>
								<small style={{lineHeight: '14px'}}>3h ago</small>
								<div style={{fontSize: '48px', lineHeight: '24px', color:'#fff', margin: 0}}>&#x203a;</div>
								{/*
								*/}
							</div>
						</div>
					</Link>
				</li>
			))}
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
          margin-bottom: -1px; /* Gap fix */
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
		</ul>
  }
}
