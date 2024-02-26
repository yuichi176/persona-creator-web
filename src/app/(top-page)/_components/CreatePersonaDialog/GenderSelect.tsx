import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const GenderSelect = () => {
  return (
    <Select defaultValue="指定なし">
      <SelectTrigger className="w-[280px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="指定なし">指定なし</SelectItem>
          <SelectItem value="男">男</SelectItem>
          <SelectItem value="女">女</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
