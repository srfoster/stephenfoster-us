import { FancyReactMarkdown } from "../../../../../components/index"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../../../../App.css'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export const text =
[
    <FancyReactMarkdown>{`
# October 11th, 2022 - Tuesday 

Added text to homepage today:

> *I'm a software architect, designer, b/vlogger, novelist, professor, and many other things. Although it'll take me years, I'm currently working to consolodate my various projects in one place.*

> *Welcome to my site.*

I'll probably change it (and the intro video) many times as this project evolves, but it's important
to start somewhere.

A few things I'd like to accomplish in the upcoming weeks:

* Finalize all landing pages reachable from homepage tiles
* Fix the "Contact Me" button
* Start setting a schedule for content production 

I installed \`react-big-calendar\` to help me communicate my schedule when the time comes.
`}</FancyReactMarkdown>,
<Calendar
  localizer={localizer}
  views={["month"]}
  defaultDate={ new Date(2022,9,11)} 
  events={[
    { id: 0,
      title: "Hello, World",
      allDay: true,
      start: "2022-10-11T07:00:00.000Z",
      end: "2022-10-11T07:00:00.000Z",
    }  
]}
startAccessor="start"
endAccessor="end"
style={{ height: 500 }}
/>]