export default{ 
    name: 'songRequest',
    type: 'document', 
    title: 'Song Requests',
    fields: [
        {name: 'name', type: 'string', title: 'Listener Name'},
        {name: 'song', type: 'string', title: 'Song Title'},
        {name: 'artist', type: 'string', title: 'Artist'},
        {name: 'message', type: 'text', title: 'Dedication/Message'},
        {name: 'submittedAt', type: 'datetime', title: 'Time Received',
            initialValue: (new Date()).toISOString()
        }
    ]
}