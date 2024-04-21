import { AccordionItemCtx, type AccordionItemCtxValue } from '../../contexts/accordion-item-ctx/index.js'
import { AccordionItemProps } from './types.js'

export function AccordionItem(props: AccordionItemProps) {
  const value: AccordionItemCtxValue = {
    value: props.value
  }

  return (
    <AccordionItemCtx.Provider value={value}>
      {props.children}
    </AccordionItemCtx.Provider>
  )
}
