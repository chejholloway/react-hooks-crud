import React, { useContext, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { CustomersDispatchContext } from '../../../Context/Customers/Customers.context';
import useCustomerFormInput from '../../../Hooks/useCustomerFormInput';
import useToggle from '../../../Hooks/useModal';

const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch'
			}
		}
	}
}));

export default function SearchAppBar() {
	const classes = useStyles();
	const { isOpen, toggle } = useToggle();
	const { searchCustomers } = useContext(CustomersDispatchContext);
	const { formState: searchInput, handleChange, reset } = useCustomerFormInput({});

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			toggle();
			searchCustomers(searchInput.search);
		}
	};

	const clearSearch = () => {
		toggle();
		reset();
		searchCustomers('');
	};

	useEffect(() => {
		return () => {
			reset();
			searchCustomers('');
		};
		// eslint-disable-next-line
	}, []);

	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>

			<InputBase
				placeholder="Search…"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput
				}}
				inputProps={{ 'aria-label': 'search' }}
				name="search"
				value={searchInput.search || ''}
				onChange={handleChange}
				onKeyPress={handleKeyPress}
				endAdornment={
					isOpen && (
						<IconButton size="small" aria-label="close" color="inherit" onClick={clearSearch}>
							<CloseIcon fontSize="medium" />
						</IconButton>
					)
				}
			/>
		</div>
	);
}
