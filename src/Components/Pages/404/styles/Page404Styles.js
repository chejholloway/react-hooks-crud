import { makeStyles } from '@material-ui/core/styles';

const Page404Styles = makeStyles((theme) => ({
	leftPad: {
		paddingLeft: '10rem'
	},
	notfoundID: {
		position: 'relative',
		height: '100vh',
		background: '#030005'
	},
	notfoundIDandClass: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)'
	},
	notfoundClass: {
		maxWidth: '767px',
		width: '100%',
		lineHeight: '1.4',
		textAlign: 'center'
	},
	notfound404: {
		position: 'relative',
		height: '180px',
		marginBottom: '20px',
		zIndex: -1
	},
	h1: {
		fontFamily: "'Montserrat', sans-serif",
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50% , -50%)',
		fontSize: '224px',
		fontWeight: 900,
		marginTop: '0px',
		marginBottom: '0px',
		marginLeft: '-12px',
		color: '#030005',
		textTransform: 'uppercase',
		textShadow: '-1px -1px 0px #8400ff, 1px 1px 0px #ff005a',
		letterSpacing: '-20px'
	},
	h2: {
		fontFamily: "'Montserrat', sans-serif",
		position: 'absolute',
		left: 0,
		right: 0,
		top: '110px',
		fontSize: '42px',
		fontWeight: 700,
		color: '#fff',
		textTransform: 'uppercase',
		textShadow: '0px 2px 0px #8400ff',
		letterSpacing: '13px',
		margin: 0
	},
	Navlink: {
		fontFamily: "'Montserrat', sans-serif",
		display: 'inline-block',
		textTransform: 'uppercase',
		color: '#ff005a',
		textDecoration: 'none',
		border: '2px solid',
		background: 'transparent',
		padding: '10px 40px',
		fontSize: '14px',
		fontWeight: 700,
		transition: '0.2s all'
	},
	NavLinkHover: {
		color: '#8400f;'
	},
	h1Small: {
		fontSize: '182px'
	},
	h2Small: {
		fontSize: '24px'
	}
}));

export default Page404Styles;
/*












@media only screen and (max-width: 480px): {
  h1 {
      fontSize: '182px';
  }
} */
