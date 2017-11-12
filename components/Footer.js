import Link from 'next/link'

const Footer = () => (
	<footer>
		<small className='muted'>
			Berbagi keterampilan ke yang membutuhkan
			&middot;
			&copy; 2017 <strong className='h6'>pitutur</strong> for <strong className='h6'>hackatown2017</strong>
		</small>
		<style jsx>{`
			footer { 
				text-align: center;
				padding: 1rem 0;
				margin-top: 2rem;
			}
		`}</style>
	</footer>
)

export default Footer
