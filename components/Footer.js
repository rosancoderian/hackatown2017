import Link from 'next/link'

const Footer = () => (
	<footer>
		<small className='muted'>&copy; 2017 Pitutur</small> &nbsp;
		{/*<img src="/static/icons/fb-share.png" />*/}
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
