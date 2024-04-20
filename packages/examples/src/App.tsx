import { Switch, Route, Link } from 'wouter'
import { AccordionPage } from './pages/accordion'
import { ButtonPage } from './pages/button'
import { ListPage } from './pages/list'

const components = {
  Accordion: AccordionPage,
  Button: ButtonPage,
  List: ListPage,
}

export function App() {
  return (
    <div>
      <aside>
        <nav>
          <ul>
            {Object.keys(components).map((componentName) => {
              return (
                <li>
                  <Link to={`/${componentName}`}>
                    {componentName}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
      <main>
        <Switch>
          {Object.entries(components).map(([componentName, component]) => {
            return (
              <Route path={`/${componentName}`} component={component} />
            )
          })}
        </Switch>
      </main>
    </div>
  )
}
