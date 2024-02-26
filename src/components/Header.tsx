import { ModeToggle } from '@/components/ModeToggle'
import { cn } from '@/lib/utils'

type HeaderProps = React.HTMLAttributes<HTMLDivElement>

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn('h-[80px] border-b', className)}>
      <ul className="h-full flex items-center justify-between px-[20px] py-[10px]">
        <li>
          <h1 className="text-2xl font-semibold tracking-tight">Persona Creator</h1>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </header>
  )
}
