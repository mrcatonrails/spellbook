import {
  AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'core'
import { pokemons } from '../../data/pokemons'

export function SingleAccordion() {
  return (
    <AccordionRoot type="single">
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
