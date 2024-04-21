import { useContext } from 'react'
import { AccordionItemCtx } from '../accordion-item-cxt.js'

export function useAccordionItemCtx() {
  return useContext(AccordionItemCtx)
}
