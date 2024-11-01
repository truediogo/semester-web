import styles from '@/styles/unreset.module.css'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { cn } from '@/lib/utils'
import { contentfullClient } from '@/service/contentful'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de privacidade'
}

export default async function PrivacyPage() {
  const data: any = await contentfullClient.getEntry('4SCIWJgCI1E3vmWYNBoOtc')

  return (
    <div
      className={cn(
        styles.container,
        'container mt-12 max-w-4xl flex flex-col gap-4'
      )}
    >
      {documentToReactComponents(data.fields.privacyContent)}
    </div>
  )
}
