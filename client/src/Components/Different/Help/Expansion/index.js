import React from 'react';

/* Module */
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const simpleExpansionPanel = (props) => {
    const {question, index} = props;
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <p>#{index + 1}. {question.title}</p>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <p>{question.text}</p>
            </ExpansionPanelDetails>
        </ExpansionPanel>

    );
};

export default simpleExpansionPanel;