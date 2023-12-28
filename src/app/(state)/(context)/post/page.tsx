import { SelectItems } from './_components/SelectItems'
import { ShowItem } from './_components/ShowItems'
import { SelectionProvider } from './context/selectItemContext'

export default function Post() {
  return (
    <SelectionProvider>
      <div className="flex flex-col">
        <SelectItems />
        <ShowItem />
      </div>
    </SelectionProvider>
  )
}
