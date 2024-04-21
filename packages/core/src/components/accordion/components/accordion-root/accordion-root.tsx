import { useState } from 'react'
import { AccordionCtx, type AccordionCtxValue } from '../../contexts/accordion-ctx/index.js'
import type { AccordionRootProps } from './types.js'

export function AccordionRoot(props: AccordionRootProps) {
  const {
    type,
    defaultValue,
    onValueChange,
    children,
  } = props

  const [expanded, setExpanded] = useState(() => {
    return type === 'single' ? defaultValue ?? null : defaultValue ?? []
  })

  const toggle = (value: string) => {
    setExpanded((expanded) => {
      if (Array.isArray(expanded)) {
        if (expanded.includes(value)) {
          const copy = structuredClone(expanded)
          copy.splice(copy.indexOf(value), 1)
          return copy
        }

        return [...expanded, value]
      }

      return expanded === value ? null : value
    })
  }

  const value: AccordionCtxValue = {
    expanded,
    toggle,
  }

  return (
    <AccordionCtx.Provider value={value}>
      {children}
    </AccordionCtx.Provider>
  )
}
