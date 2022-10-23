import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'

const serializeMarkdown = async (item) => {

    const body = await serialize(item.attributes.body);

    console.log(body)
    return {
        ...item,
        attributes: {
            ...item.attributes,
            body,
        },
    };
};

export default serializeMarkdown