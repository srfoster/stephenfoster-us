import { useState, useEffect, useMemo } from "react";
import { FancyReactMarkdown } from "../../components/index"

import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Box, Button, Typography, Modal} from '@mui/material'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  export default function PopupEvent(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <div onClick={handleOpen}>{props.title}<br /><img src={ props.imgSrc} width="100%" /></div >,
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
               <div>{props.title}<br /><img src={ props.imgSrc} width="100%" /></div >
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               { props.fullText }
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }

export const text =
  [
    <FancyReactMarkdown>{`
# Calendar
`}</FancyReactMarkdown>,

<Calendar
  localizer={localizer}
  views={["month"]}
  defaultDate={ new Date(2022,9,11)} 
  events={[
    { id: 0,
      title: <PopupEvent title="Made Calendar" imgSrc="hacker.png" fullText="Launched the Calendar you're looking at"/>,
      start: "2022-10-12T07:00:00.000Z",
      end: "2022-10-12T07:00:00.000Z",
    },
    { id: 1,
      title: <PopupEvent title="Refactoring" imgSrc="hacker.png" fullText="Refactored blog posts into separate files"/>,
      start: "2022-10-13T07:00:00.000Z",
      end: "2022-10-13T07:00:00.000Z",
    },
    { id: 2,
      title: <PopupEvent title="Storytree" imgSrc="tree-with-eyes2.jpg" fullText="Factored out Storytree tile so that I can start doing more writings ABOUT my work on the Storytree"/>,
      start: "2022-10-14T07:00:00.000Z",
      end: "2022-10-14T07:00:00.000Z",
    }  ,
    { id: 3,
      title: <PopupEvent title="Installation" imgSrc="hacker.png" fullText="Researched charting libraries in react and installed one"/>,
      start: "2022-10-15T07:00:00.000Z",
      end: "2022-10-15T07:00:00.000Z",
    }  ,
    { id: 4,
      title: <PopupEvent title="Refactoring" imgSrc="hacker.png" fullText="Do TODOs from Oct 14"/>,
      start: "2022-10-17T07:00:00.000Z",
      end: "2022-10-17T07:00:00.000Z",
    }  ,
    { id: 5,
      title: <PopupEvent title="Storytree" imgSrc="tree-with-eyes2.jpg" fullText="Post concept art?"/>,
      start: "2022-10-21T07:00:00.000Z",
      end: "2022-10-21T07:00:00.000Z",
    }  ,
]}
startAccessor="start"
endAccessor="end"
style={{ height: 1000 }}
/> ]