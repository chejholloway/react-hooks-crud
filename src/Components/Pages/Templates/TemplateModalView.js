import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TemplateCard from './components/TemplateCard';
import useTemplateModalStyles from './styles/useTemplateModalStyles';

const TemplateModalView = (props) => {
	const classes = useTemplateModalStyles();
	const { isOpen, toggle } = props;

	return (
		<Fragment>
			<Dialog open={isOpen} onClose={toggle} aria-labelledby="form-dialog-title">
				<DialogTitle className={classes.title} id="form-dialog-title">
					Template Details
				</DialogTitle>

				<DialogContent className={classes.container}>
					<TemplateCard {...props} />
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default TemplateModalView;
