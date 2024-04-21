import { createContext } from 'react'
import { AccordionCtxValue } from './types.js'

export const AccordionCtx = createContext<AccordionCtxValue>({
  expanded: null,
  toggle() {},
})

AccordionCtx.displayName = 'AccordionCtx'
