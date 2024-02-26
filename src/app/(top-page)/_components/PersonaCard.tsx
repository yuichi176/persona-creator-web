import { Card } from '@/components/ui/card'
import { PersonaData } from '@/app/(top-page)/_components/TopPageContainer'

interface PersonaCardProps {
  personaData: PersonaData
}

export const PersonaCard = ({ personaData }: PersonaCardProps) => {
  return (
    <Card className="p-5">
      <div className="grid grid-cols-2 gap-8">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <p>名前</p>
            <p className="text-muted-foreground">{personaData.name}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p>性別</p>
            <p className="text-muted-foreground">{personaData.age}歳</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p>年齢</p>
            <p className="text-muted-foreground">{personaData.gender}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p>職業</p>
            <p className="text-muted-foreground">{personaData.occupation}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p>学歴</p>
            <p className="text-muted-foreground">{personaData.education}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p>収入</p>
            <p className="text-muted-foreground">{personaData.income}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p>家族構成</p>
            <p className="text-muted-foreground">{personaData.familyStructure}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p>趣味</p>
            <p className="text-muted-foreground">{personaData.hobbies}</p>
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col">
            <p className="mb-2">性格（価値観・人生観）</p>
            <p className="text-muted-foreground">{personaData.personality}</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-2">仕事上の目標</p>
            <p className="text-muted-foreground">{personaData.workGoal}</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-2">現在の状況</p>
            <p className="text-muted-foreground">{personaData.currentSituation}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
