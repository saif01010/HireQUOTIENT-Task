import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import CustomizedTables from './Table';

    // Your code here



export default function AccordionUsage({data}) {
    // console.log(data)
  return (
    <div>
    
      {Object.entries(data).map(([key,value]) => {
        return (
          <Accordion key={key}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {key}
            </AccordionSummary>
            <AccordionDetails>
              <CustomizedTables key={key} data={value} />
            </AccordionDetails>
          </Accordion>
        )
      })}
     
    </div>
  );
}

AccordionUsage.propTypes = {
    data: PropTypes.object.isRequired,
};