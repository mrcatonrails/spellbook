import { SingleAccordion, MultiAccordion } from '../components/accordion'

export function AccordionPage() {
  return (
    <div>
      <h1>Accordion</h1>
      <section>
        <h2>Single Accordion</h2>
        <div>
          <SingleAccordion />
        </div>
        <h2>Multi Accordion</h2>
        <div>
          <MultiAccordion />
        </div>
      </section>
    </div>
  )
}
