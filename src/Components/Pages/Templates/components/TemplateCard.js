import React, { Fragment, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import TemplateCardStyles from '../styles/TemplateCardStyles';

import { TemplatesDispatchContext } from '../../../../Context/Templates/Templates.context';

export default function ViewCard(props) {
	const classes = TemplateCardStyles();

	const { deleteTemplate } = useContext(TemplatesDispatchContext);
	const { isOpen, data, toggle, toggleEditForm } = props;
	const { id, name, content } = data;

	const handleDelete = (id) => {
		isOpen && toggle();
		deleteTemplate(id);
	};

	const handleEdit = (data) => {
		toggle();
		toggleEditForm(data);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				action={
					<Fragment>
						{isOpen && (
							<IconButton aria-label="edit" onClick={() => handleEdit(data)}>
								<EditIcon />
							</IconButton>
						)}

						<IconButton aria-label="delete" onClick={() => handleDelete(id)}>
							<DeleteForeverIcon />
						</IconButton>
					</Fragment>
				}
				title={`Template ${name}`}
			/>

			<CardContent>
				<Typography variant="body2" color="textPrimary" component="p">
					{content ? content : 'No content for this template yet'}
				</Typography>
			</CardContent>
		</Card>
	);
}
