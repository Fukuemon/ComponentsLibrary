import BadMapContent from './Bad/MapContent'
import BadMapContent2 from './Bad/MapContent2'
import GoodMapContent from './Good/MapContent'

export default function MapKeyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-full flex flex-col items-center justify-center space-y-12">
      {children}
      <BadMapContent />
      <GoodMapContent />
      <BadMapContent2 />
    </div>
  )
}
