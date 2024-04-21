import type { PropsWithChildren } from 'react'

export type AccordionSingleProps = {
  type: 'single',
  defaultValue?: string,
  onValueChange?: (value: string) => void,
}

export type AccordionMultiProps = {
  type: 'multi',
  defaultValue?: string[],
  onValueChange?: (value: string[]) => void,
}

export type AccordionRootProps = PropsWithChildren<AccordionSingleProps | AccordionMultiProps>
