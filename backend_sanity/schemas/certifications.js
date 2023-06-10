export default{
    name:'certifications',
    title:'Certifications',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'badgeIcon',
            title:'BadgeIcon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}