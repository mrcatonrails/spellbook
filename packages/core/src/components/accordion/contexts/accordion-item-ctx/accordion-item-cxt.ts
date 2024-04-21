import { createContext } from 'react'
import type { AccordionItemCtxValue } from './types.js'

export const AccordionItemCtx = createContext<AccordionItemCtxValue>({
  value: '',
})

AccordionItemCtx.displayName = 'AccordionItemCtx'
