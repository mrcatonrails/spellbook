import { useContext } from 'react'
import { AccordionCtx } from '../accordion-ctx.js'

export function useAccordionCtx() {
  return useContext(AccordionCtx)
}
