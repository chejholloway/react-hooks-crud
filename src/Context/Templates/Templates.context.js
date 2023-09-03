import React, { createContext } from 'react';
import useTemplatesState from './useTemplatesState';

export const TemplatesStateContext = createContext();
export const TemplatesDispatchContext = createContext();

export const TemplatesProvider = (props) => {
	const [
		templates,
		dispatch,
		createTemplate,
		updateTemplate,
		deleteTemplate,
		searchTemplates
	] = useTemplatesState();

	return (
		<TemplatesStateContext.Provider value={templates}>
			<TemplatesDispatchContext.Provider
				value={{ dispatch, createTemplate, updateTemplate, deleteTemplate, searchTemplates }}
			>
				{props.children}
			</TemplatesDispatchContext.Provider>
		</TemplatesStateContext.Provider>
	);
};
