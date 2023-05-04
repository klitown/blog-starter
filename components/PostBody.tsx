/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'

import styles from './PostBody.module.css'
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image'


export default function PostBody({ content }) {


  const customBlockComponents = {
    // first we tackle our custom block types
    types: {
      image: ({ value }) => {
        // we need to get the image source url, and since @sanity/image-url will give us optimised images for each instance we use it
        const imgUrl = urlForImage(value.asset).height(500).width(500).url()

        return <Image
          width={500}
          height={500}
          alt={value.alt}
          src={imgUrl}
          sizes="100vw"
          priority={false}
        />
      },
    },
  }

  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} components={customBlockComponents} />
    </div>
  )
}