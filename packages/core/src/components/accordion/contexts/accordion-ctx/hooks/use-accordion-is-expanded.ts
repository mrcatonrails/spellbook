import { useAccordionCtx } from './use-accordion-ctx.js'

export function useAccordionIsExpanded(value: string) {
  const ctx = useAccordionCtx()

  let isExpanded = false

  if (Array.isArray(ctx.expanded)) {
    isExpanded = ctx.expanded.includes(value)
  } else {
    isExpanded = value === ctx.expanded
  }

  return isExpanded
}
