import Link from 'next/link'
import FbLoginButton from '../components/FbLoginButton'

/** // eg
const headerStyle = {
	padding: 20,
	border: '1px solid #DDD'
}
**/

const Header = () => (
	<header>
		<nav>
			<Link href='/'>
				<a className='logo'>
					<img src="/static/logo.svg" />&nbsp;<h3>sumbangkarya</h3>
				</a>
			</Link>
			<ul className='list-inline' style={{fontSize: '14px'}}>
				<Link href='/about'><li><a href="">apa itu sumbangkarya?</a></li></Link>
				{/*<Link href='/auth'><li><a href="">akun</a></li></Link>*/}
				<li><FbLoginButton style={{textTransform:'lowercase'}} /></li>
			</ul>
		</nav>
		<style jsx>{`
			a { text-decoration: none; color: rgba(0,0,0,0.7); }
			a:hover { color: #222; }
			h3 { 
				margin: 0;
				display: table-cell;
				vertical-align: middle;
			}
			header { 
				margin-bottom: 3rem; 
				padding: 1rem; 
				padding-bottom: 0;
				position: fixed;
				width: 100%;
				top: 0;
				z-index: 99;
			}
			i { display: none; }
			img { width: 3.2rem; }
			li { 
				display: inline-block; 
				margin-left: 1rem; 
			}
			li a {}
			.logo, h3 { color: rgba(0,0,0,0.7); }
			.logo { 
				font-weight: 800; 
				display: table;
				margin-top: -0.25rem;
				float: left;
			}
			ul { display: inline-block; float: right; }
		`}</style>
	</header>
)

export default Header
