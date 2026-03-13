import { Layout } from "lucide-react";
import { title } from "process";

export default {
    name: 'announcement',
    type: 'document', 
    title: 'Announcements',
    fields:[
        {
            name: 'title',
            type: 'string',
            title: 'Event/Announcement Name',
            description: 'The Main headline (e.g., "Grand Opening" or "Live Concert")',
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category Icon',
            options: {
                list: [
                    {title: 'Calendar (Date/Event)', value: 'Evento'},
                    {title: 'Star (Special Feature)', value: 'Concurso'},
                    {title: 'Bell (Alert/Important)', value: 'Novedad'},
                    {title: 'Speaker (Live Broadcast)', value: 'Aviso'},
                ],
                layout: 'radio',
            },
        },
        {
            name: 'eventDate',
            type: 'datetime',
            title: 'Event Date & Time',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'A brief summary of what is happening.',
        },
    ],
};