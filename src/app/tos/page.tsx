import styles from '@/styles/unreset.module.css'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { cn } from '@/lib/utils'
import { contentfullClient } from '@/service/contentful'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de uso'
}

export default async function TosPage() {
  const data: any = await contentfullClient.getEntry('6dMZUYrS6j4m5L2D2k7CGS')

  return (
    <div
      className={cn(
        styles.container,
        'container mt-12 max-w-4xl flex flex-col gap-4'
      )}
    >
      {documentToReactComponents(data.fields.tosContent)}
    </div>
  )
}
