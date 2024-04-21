import { useCallback } from 'react'
import { useAccordionCtx } from './use-accordion-ctx.js'

export function useAccordionToggle(value: string) {
  const ctx = useAccordionCtx()

  return useCallback(() => ctx.toggle(value), [value])
}
