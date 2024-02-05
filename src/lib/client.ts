import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url/lib/types/builder";

export const client = sanityClient({
    projectId: 'awlmefa0',
    dataset: 'production',
    apiVersion: '2024-02-05',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)