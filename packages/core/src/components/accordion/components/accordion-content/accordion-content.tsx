import { useAccordionIsExpanded } from '../../contexts/accordion-ctx/index.js'
import { useAccordionItemValue } from '../../contexts/accordion-item-ctx/index.js'
import { AccordionContentProps } from './types.js'

export function AccordionContent(props: AccordionContentProps) {
  const value = useAccordionItemValue()
  const isExpanded = useAccordionIsExpanded(value)

  return isExpanded ? props.children : null
}
