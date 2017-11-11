import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Job = (props) => (
	<Layout title={props.job.title}>
		<div className='card'>
			<div className='row'>
				<div className='heading col col-9'>
					<h2 className='title' style={{margin:0}}>{props.job.title}</h2>
				</div>
				<div className='meta col col-3' style={{background:'#ff431d', color:'#fff', textAlign:'center'}}>
					<small style={{lineHeight: '14px'}}>3h ago</small>
					<div className='h4' style={{color:'#fff', margin: 0, fontWeight: 700}}>daftar</div>
					{/*
					*/}
				</div>
			</div>
			<div className='detail'>
				{props.job.description}
			</div>

			{/*
			<p>{props.job.description.replace(/<[/]?p>/g, '')}</p>
			<img src={props.job.image.medium}/>
			<Link href='/'><div className='back-link'><a>&larr; Kembali</a></div></Link>
			*/}
		</div>
		<style jsx>{`
			.card {
				max-width: 48rem;
				margin: 0 auto;
			}
			.heading,
			.meta {
				padding: 1.2rem;
			}
			.detail {
				border-top: 1px solid #ddd;
				inset 0px 2px 2px -2px rgba(0,0,0,0.1);
				white-space: pre-wrap;
				padding: 1.6rem 1.2rem;
			}
			.finished {
				background: #819D9F;
			}
		`}</style>
	</Layout>
)

Job.getInitialProps = async function (context) {
	const { id } = context.query
	//const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
	const res = await fetch(`http://localhost:3004/jobs/${id}`)
	const job = await res.json()

	console.log(`Fetched: ${job.title}`)

	return { job }
}

export default Job