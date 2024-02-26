import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { AgeSelect } from '@/components/CreatePersonaDialog/AgeSelect'
import { GenderSelect } from '@/components/CreatePersonaDialog/GenderSelect'
import { LocationSelect } from '@/components/CreatePersonaDialog/LocationSelect'
import { IncomeSelect } from '@/components/CreatePersonaDialog/IncomeSelect'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface CreatePersonaDialogProps {
  className?: string
}

export const CreatePersonaDialog = ({ className }: CreatePersonaDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn('w-[200px]', className)}>Create Persona</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Persona</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-left">性別</Label>
            <GenderSelect />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-left">年齢</Label>
            <AgeSelect />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-left">居住地</Label>
            <LocationSelect />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-left">収入</Label>
            <IncomeSelect />
          </div>
          <div className="grid w-full gap-1.5 mt-3">
            <Label htmlFor="others" className="mb-2">
              その他
            </Label>
            <Textarea placeholder="学歴、家族構成、趣味..." id="others" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
