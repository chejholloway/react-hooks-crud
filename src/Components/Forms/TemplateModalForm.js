import React, { useContext, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { TemplatesDispatchContext } from '../../Context/Templates/Templates.context';
import useTemplateFormInput from '../../Hooks/useTemplateFormInput';
import useTemplateModalStyles from './styles/useTemplatesModalStyles';

const TemplateModalForm = (props) => {
	const classes = useTemplateModalStyles();
	const { isEditing, isOpen, toggle, data, title = 'Create Template' } = props;

	const { formState, handleChange, getRandomTemplate, reset, errors, handleSubmit } = useTemplateFormInput(
		data,
		sendForm
	);
	const { id, name, content } = formState;

	const { createTemplate, updateTemplate, deleteTemplate } = useContext(TemplatesDispatchContext);

	function sendForm(newData) {
		if (isEditing) {
			updateTemplate(newData);
			reset();
			toggle();
		} else {
			createTemplate(newData);
			reset();
		}
	}

	return (
		<Fragment>
			<Dialog open={isOpen} onClose={toggle} aria-labelledby="form-dialog-title">
				{isEditing ? (
					<Fragment>
						<DialogTitle className={classes.title} id="form-dialog-title">
							Update Template
						</DialogTitle>

						<Button
							size="small"
							onClick={() => {
								toggle();
								deleteTemplate(id);
							}}
							startIcon={<DeleteForeverIcon />}
						>
							Click here to delete this Template
						</Button>
					</Fragment>
				) : (
					<Fragment>
						<DialogTitle className={classes.title} id="form-dialog-title">
							{title}
						</DialogTitle>
						<Button size="small" onClick={getRandomTemplate} startIcon={<PersonAddIcon />}>
							Generate a new Random Template (mock only)
						</Button>
					</Fragment>
				)}

				<Divider />

				<DialogContent className={classes.container}>
					<TextField
						required
						className={classes.itemS}
						autoFocus
						margin="dense"
						variant="outlined"
						name="name"
						label="Template Name"
						type="text"
						value={name}
						onChange={handleChange}
						helperText={errors.name}
						error={Boolean(errors.name)}
					/>

					<TextField
						required
						className={classes.itemS}
						margin="dense"
						variant="outlined"
						name="content"
						label="Content"
						type="text"
						value={content}
						onChange={handleChange}
						helperText={errors.content}
						error={Boolean(errors.content)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle} color="primary">
						Cancel
					</Button>
					<Button onClick={handleSubmit} color="primary">
						Validate
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default TemplateModalForm;
