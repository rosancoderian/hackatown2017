import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import * as firebase from 'firebase'

const Job = (props) => (
	<Layout title={props.job.title}>
		<div className='card'>
			<Link href='/'><div className='back-link h5'><a>&larr; kembali</a></div></Link>
			<div className='row'>
				<div className='heading col col-9' style={{paddingBottom:'1rem'}}>
					<h2 className='title' style={{margin:0}}>{props.job.title}</h2>
					<div className='h5' style={{marginTop:4, fontSize: '17px'}}>
						<ul className='list-inline'>
							<li><img src="/static/icons/tag.svg" />&nbsp;web development</li>
							<li><img src="/static/icons/location.svg" />&nbsp;Bantul, DI Yogyakarta</li>
							<li className='share-link'><a href><img src="/static/icons/share.svg" />&nbsp;bagikan</a></li>
							{/*
							*/}
						</ul>
					</div>
				</div>
				<Link href='/'>
					<div className='meta col col-3' style={{textAlign:'center'}}>
						<small>3h ago</small>
						<div className='h3' style={{color:'#fff', margin: 0, marginTop: '4px', fontWeight: 700}}>daftar</div>
					</div>
				</Link>
			</div>
			<div className='detail description'>
				{props.job.description}
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div className='detail'>
				<h4 style={{padding:'1.2rem', paddingBottom:0, marginBottom:'-8px', fontWeight: 400}}>Penyelenggara</h4>
				<div className='row'>
					<div className='col col-2' style={{padding: '1.6rem 1.2rem 1rem'}}>
						<a href="https://web.facebook.com/Internetdotorg/" target="_blank"><img src="/static/sample-profpic-1.png" style={{borderRadius:'50%'}} /></a>
					</div>
					<div className='col col-10' style={{padding: '1.2rem', paddingLeft: 0}}>
						<h5 style={{margin:0}}><a href="https://web.facebook.com/Internetdotorg/" target="_blank">{props.job.organization} &nbsp;<img src="/static/icons/verified.svg" />&nbsp;<img src="/static/icons/fb.png" /></a></h5>
						<p>Internet.org is a Facebook-led initiative bringing together technology leaders, nonprofits and communities to connect the two thirds of the world that doesn’t have internet access.</p>
					</div>
				</div>
			</div>
			<div className='detail'>
				<h4 style={{padding:'1.2rem', paddingBottom:0, marginBottom:'-8px', fontWeight: 400}}>Kontributor</h4>
				<div className='row'>
					<div className='col col-2' style={{padding: '1.6rem 1.2rem 1rem'}}>
						<a href="https://web.facebook.com/Internetdotorg/" target="_blank"><img src="https://randomuser.me/api/portraits/men/40.jpg" style={{borderRadius:'50%'}} /></a>
					</div>
					<div className='col col-10' style={{padding: '1.2rem', paddingLeft: 0}}>
						<h5 style={{margin:0}}><a href="https://web.facebook.com/Internetdotorg/" target="_blank">Richard Gibson&nbsp;<img src="/static/icons/fb.png" /></a></h5>
						<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
					</div>
					<button className='btn btn-secondary' style={{display: 'block', width: '66.66%', margin: '0 auto 2rem'}}><a className='open-link h6'>Lihat Hasil Karya</a></button>
				</div>
			</div>

			{/*
			<p>{props.job.description.replace(/<[/]?p>/g, '')}</p>
			<img src={props.job.image.medium}/>
			*/}
		</div>
		<style jsx>{`
			a { text-decoration: none; }
			.back-link {
				width: 9rem;
				left: -9rem;
				text-align: right;
				padding: 1.2rem;
				padding-left: 0;
				padding-top: 1.6rem;
				padding-right: 1.6rem;
				position: absolute;
				font-weight: 700;
				color: #666;
			}
			.btn { background: #ddd; display: block; font-weight: 700; }
			.btn-secondary * { color: #444; }
			.card {
				max-width: 48rem;
				margin: 0 auto;
				position: relative;
			}
			.heading,
			.meta {
				padding: 1.2rem;
			}
			h4 img, h5 img,
			.heading img {
				height: 14px;
				margin-bottom: 2px;
				vertical-align: middle;
			}
			.list-inline li { margin-right: 1rem;  }
			.detail {
				border-top: 1px solid #ddd;
				inset 0px 2px 2px -2px rgba(0,0,0,0.1);
				color: #444;
				font-size: 15px;
			}
			.detail.description {
				padding: 1.6rem 1.2rem;
				white-space: pre-wrap;
			}
			.meta.finished {
				background: #819D9F;
			}
			.meta {
				padding-top: 1.4rem;
			}
			.meta:hover {
				cursor: pointer;
			}
			.meta,
			.btn-secondary:hover {
				background: #ff431d;
				color: #fff;
			}
			.btn-secondary:hover * {
				color: #fff;
			}
			.share-link, .share-link * {
				color: #3b5998;
				font-weight: 700;
			}
			.share-link:hover, .share-link:hover * {
				color: #234487;
			}
		`}</style>
	</Layout>
)

Job.componentDidMount = async function (context) {

}

Job.getInitialProps = async (context) => {
	//const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
	const { id } = context.query

	let result = await firebase.database().ref(`/jobs/${id}`).once('value')
	let job = result.val()

	return { job }
}

export default Job
