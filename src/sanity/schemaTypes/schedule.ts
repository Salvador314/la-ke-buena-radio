import { title } from "process";

export default{
    name: 'schedule',
    type: 'document',
    title: 'Schedule',
    fields:[
        {
            name: 'title',
            type: 'string',
            title: 'Show name',
            description: 'The name of the show (e.g., Despierta Latina)'
        },
        {
            name: 'speakerNames',
            type: 'string',
            title: 'Name of Speakers',
            description: 'list of speakers live (e.g., con Ernesto & Ricardo)'
        },
        {
            name: 'startTime',
            type: 'string',
            title: 'Start Time',
            description: 'e.g., 6:00 AM'
        },
        {
            name: 'endTime',
            type: 'string',
            title: 'End Time',
            description: 'e.g., 10:00 AM'
        },
        {
            name: 'day',
            type: 'string',
            title: 'Day of the Week',
            options:{
                list:[
                    {title: 'Lunes', value:'lunes'},
                    {title: 'Martes', value:'martes'},
                    {title: 'Miercoles', value:'miercoles'},
                    {title: 'Jueves', value:'jueves'},
                    {title: 'Viernes', value:'viernes'},
                    {title: 'Sabado', value:'sabado'},
                    {title: 'Domingo', value:'domingo'},
                ]
            }
        }
    ]
}