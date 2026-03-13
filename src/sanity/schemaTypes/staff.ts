import { Rule } from 'sanity'

export default{
    name: 'staff',
    title: 'Staff & Locutores',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nombre Completo',
            type: 'string',
        },
        {
            name: 'position',
            title: 'Posicion',
            type: 'string',
            description: 'ej, Locutor, Secretaria, Directora'
        },
        {
            name: 'image',
            title: 'Foto',
            type: 'image',
            options: { hotspot:true },
        },
        {
            name: 'showname',
            title: 'Nombre del Show',
            type: 'string',
            description: 'Solo para los locutores. ej:Sonido Mañanero.'
        },
        {
            name: 'showtime',
            title: 'Horario',
            type: 'string',
            description: 'Ej. Lunes a Viernes 6am - 10am'
        },
        {
            name: 'socialLinks',
            title: 'Redes Sociales',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'platform',
                            title: 'Plataforma',
                            type: 'string',
                            options: {
                                list: [
                                    {title: 'Instagram', value: 'instagram'},
                                    {title: 'Facebook', value: 'facebook'},
                                    {title: 'X (twitter)', value: 'twitter'},
                                    {title: 'Tiktok', value: 'tiktok'},
                                    {title: 'Whatsapp', value: 'whatsapp'},
                                    {title: 'Email', value: 'email'},
                                    {title: 'Telefono', value: 'phone'}
                                ],
                            },
                        },
                        {
                            name: 'url',
                            title: 'Enlace (URL)',
                            type: 'string',
                            description: 'Puedes poner un link de Instagram, un email (mailto:ejemplo@mail.com) o un telefono(tel:123456789)',
                            validation: (rule: Rule) => rule.uri({
                                scheme: ['http', 'https', 'mailto', 'tel']
                            })
                        }
                    ],
                    preview: {
                        select: {
                            title: 'platform',
                            subtitle: 'url'
                        }
                    }
                }
            ]
        }
    ]
}