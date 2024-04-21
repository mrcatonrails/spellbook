import { useAccordionItemCtx } from './use-accordion-item-ctx.js'

export function useAccordionItemValue() {
  const ctx = useAccordionItemCtx()

  return ctx.value
}
