import { useState, useEffect, useMemo } from "react";
import { FancyReactMarkdown } from "../../components/index"

import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Box, Button, Typography, Modal} from '@mui/material'
import moment from 'moment'

import { OfficialCoverArts, WritingIds, WritingLinkCard } from "../../components/WritingLinkCards"

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

let nextId = 0
let event = (title, id, text, date) => {
    return { id: nextId++,
      title: <PopupEvent title={title} imgSrc={OfficialCoverArts[id]} fullText={ text } />,
      start: date.toISOString(),
      end:   date.toISOString()
    } 
}

export const text =
  [
    <FancyReactMarkdown>{`
# Calendar
`}</FancyReactMarkdown>,

<Calendar
  localizer={localizer}
  views={["month"]}
  defaultDate={ new Date()} 
  events={[
    event("Made Calendar", WritingIds.WHATS_NEW, "Launched the Calendar you're looking at", new Date("October 12, 2022")),
    event("Refactoring", WritingIds.WHATS_NEW, "Refactored blog posts into separate files", new Date("October 13, 2022")),
    event("Tiles", WritingIds.WHATS_NEW, "Factored out Storytree tile so that I can start doing more writings ABOUT my work on the Storytree", new Date("October 14, 2022")),
    event("Charts", WritingIds.WHATS_NEW, "Researched charting libraries in react and installed one", new Date("October 15, 2022")),
    event("Sheet music", WritingIds.MUSIC, "Factored out score component and blogged breifly about ABC notation", new Date("October 16, 2022")),
    event("Cleanup", WritingIds.WHATS_NEW, "Did TODOs from Oct 14", new Date("October 17, 2022")),
    event("Cleanup", WritingIds.WHATS_NEW, "More TODOs from Oct 14", new Date("October 18, 2022")),
    event("SC2", WritingIds.SC2, <FancyReactMarkdown>Small blog post on [sc2](/#/starcraft-ii)</FancyReactMarkdown>, new Date("October 19, 2022")),
    event("Music", WritingIds.MUSIC, <FancyReactMarkdown>Small blog post on [music](/#/music)</FancyReactMarkdown>, new Date("October 21, 2022")),
]}
startAccessor="start"
endAccessor="end"
style={{ height: 1000 }}
/> ]