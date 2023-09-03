import React, { useContext, useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { TemplatesDispatchContext } from '../../../Context/Templates/Templates.context';
import useTemplateFormInput from '../../../Hooks/useTemplateFormInput';
import useToggle from '../../../Hooks/useModal';
import useTemplateSearchStyles from './styles/useTemplateSearchStyles';

const SearchAppBar = () => {
	const classes = useTemplateSearchStyles();
	const { isOpen, toggle } = useToggle();
	const { searchTemplates } = useContext(TemplatesDispatchContext);
	const { formState: searchInput, handleChange, reset } = useTemplateFormInput({});

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			toggle();
			searchTemplates(searchInput.search);
		}
	};

	const clearSearch = () => {
		toggle();
		reset();
		searchTemplates('');
	};

	useEffect(() => {
		return () => {
			reset();
			searchTemplates('');
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
};
export default SearchAppBar;
