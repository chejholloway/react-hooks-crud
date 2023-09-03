import React, { Fragment } from 'react';
import TemplateHeader from './components/TemplateHeader';
import TemplatesList from './TemplatesList';
import Search from './SearchTemplates';
import { TemplatesProvider } from '../../../Context/Templates/Templates.context';

const Templates = () => {
	return (
		<Fragment>
			<TemplatesProvider>
				<TemplateHeader title="Templates Listing" search={<Search />} />
				<TemplatesList />
			</TemplatesProvider>
		</Fragment>
	);
};

export default Templates;
