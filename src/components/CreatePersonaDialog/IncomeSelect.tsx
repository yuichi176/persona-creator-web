import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const IncomeSelect = () => {
  return (
    <Select defaultValue="指定なし">
      <SelectTrigger className="w-[280px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="指定なし">指定なし</SelectItem>
          <SelectItem value="100万円未満">100万円未満</SelectItem>
          <SelectItem value="100万円以上200万円未満">100万円以上200万円未満</SelectItem>
          <SelectItem value="200万円以上300万円未満">200万円以上300万円未満</SelectItem>
          <SelectItem value="300万円以上400万円未満">300万円以上400万円未満</SelectItem>
          <SelectItem value="400万円以上500万円未満">400万円以上500万円未満</SelectItem>
          <SelectItem value="500万円以上600万円未満">500万円以上600万円未満</SelectItem>
          <SelectItem value="600万円以上700万円未満">600万円以上700万円未満</SelectItem>
          <SelectItem value="700万円以上800万円未満">700万円以上800万円未満</SelectItem>
          <SelectItem value="800万円以上900万円未満">800万円以上900万円未満</SelectItem>
          <SelectItem value="900万円以上1000万円未満">900万円以上1000万円未満</SelectItem>
          <SelectItem value="1000万円以上">1000万円以上</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
