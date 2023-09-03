import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import TemplateModalForm from '../../Forms/TemplateModalForm';
import TemplateModalView from './TemplateModalView';

import { TemplatesStateContext, TemplatesDispatchContext } from '../../../Context/Templates/Templates.context';
import { ThemeContext } from '../../../Context/Theme/Theme.context';

import useModal from '../../../Hooks/useModal';

import LoadingBar from '../../LoadingBar';
import AlertStatusBar from '../../AlertStatusBar';
import useTemplateListStyles from './styles/useTemplateListStyles';

const TemplatesList = () => {
	const { isDarkMode } = useContext(ThemeContext);
	const { templates, loading, alertStatus } = useContext(TemplatesStateContext);
	const classes = useTemplateListStyles();

	const { dispatch, deleteTemplate } = useContext(TemplatesDispatchContext);
	const { isOpen, toggle, toggleWithData, data } = useModal();
	const { isOpen: isViewOpen, toggle: toggleView, toggleWithData: toggleViewWithData, data: viewData } = useModal();

	return (
		<React.Fragment>
			<TableContainer component={Paper} className={classes.padLeft}>
				<Table className={classes.table} size="small" aria-label="a table">
					<TableHead>
						<TableRow className={isDarkMode ? classes.tableHeaderDark : classes.tableHeaderLight}>
							<TableCell>Name</TableCell>
							<TableCell>Content</TableCell>
							<TableCell align="center">Actions</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{templates &&
							templates.map((template) => (
								<TableRow key={template.id}>
									<TableCell>{template.name}</TableCell>
									<TableCell>{template.content}</TableCell>
									<TableCell align="center">
										<VisibilityIcon
											className={classes.iconBtn}
											onClick={() => toggleViewWithData(template)}
										/>
										<EditIcon
											className={classes.iconBtn}
											onClick={() => toggleWithData(template)}
										/>
										<DeleteForeverIcon
											className={classes.iconBtn}
											onClick={() => deleteTemplate(template.id)}
										/>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>

				{isOpen ? <TemplateModalForm isEditing isOpen={isOpen} toggle={toggle} data={data} /> : null}

				{isViewOpen ? (
					<TemplateModalView
						isOpen={isViewOpen}
						toggle={toggleView}
						toggleEditForm={toggleWithData}
						data={viewData}
					/>
				) : null}
			</TableContainer>

			{loading && (
				<Toolbar>
					<LoadingBar />
				</Toolbar>
			)}

			<Toolbar>
				<AlertStatusBar {...alertStatus} handleAlert={() => dispatch({ type: 'CLOSE_ALERT' })} />
			</Toolbar>
		</React.Fragment>
	);
};

export default TemplatesList;
