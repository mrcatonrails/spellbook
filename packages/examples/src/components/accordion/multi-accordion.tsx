import {
  AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'core'
import { pokemons } from '../../data/pokemons'

export function MultiAccordion() {
  return (
    <AccordionRoot type="multi">
      {pokemons.map((pokemon) => (
        <AccordionItem value={pokemon.name}>
          <AccordionTrigger>
            {pokemon.name}
          </AccordionTrigger>
          <AccordionContent>
            {pokemon.desc}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}
