
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'ratings',
            title: 'Ratings',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'string'
        },
        {
            name: 'stock',
            title: 'Stock',
            type: 'number'
        },
        {
            name: 'filters',
            title: 'Filters',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [{
                type: 'string'
            }]
        }
    ]
}