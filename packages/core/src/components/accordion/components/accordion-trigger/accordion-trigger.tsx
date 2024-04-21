import { useAccordionToggle } from '../../contexts/accordion-ctx/index.js'
import { useAccordionItemValue } from '../../contexts/accordion-item-ctx/index.js'
import type { AccordionTriggerProps } from './types.js'

export function AccordionTrigger(props: AccordionTriggerProps) {
  const value = useAccordionItemValue()
  const toggle = useAccordionToggle(value)

  return (
    <button onClick={toggle}>
      {props.children}
    </button>
  )
}
