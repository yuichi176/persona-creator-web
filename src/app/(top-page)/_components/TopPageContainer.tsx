import { PersonaCard } from '@/app/(top-page)/_components/PersonaCard'
import { CreatePersonaDialog } from './CreatePersonaDialog'

const personaData: PersonaData = {
  name: '山田大輝',
  gender: '男',
  age: 25,
  occupation: '広告代理店の営業マン',
  education: '都内の私立大学経済学部卒業',
  income: '400万円以上500万円未満',
  familyStructure: '父、母、兄（1人）',
  hobbies: 'バスケットボール、読書（ビジネス書や自己啓発書）',
  personality:
    '積極的で向上心があり、新しいチャレンジを楽しむ。人とのコミュニケーションを大切にし、信頼関係を築くことを重視している。自己成長に興味があり、日々の経験から学びを得ることを大切にしている。',
  workGoal: '顧客との良好な関係構築を通じて売上を拡大し、キャリアを積んでいくこと。',
  currentSituation:
    '山田大輝は都内で広告代理店で営業職をしており、年収は400万円以上500万円未満です。仕事にはやりがいを感じつつも、さらなるキャリアアップや収入増を目指して努力しています。バスケットボールや読書などの趣味を通じてストレスを発散し、仕事とプライベートのバランスを保っています。',
}

export const TopPageContainer = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-4/5 max-w-[1000px]">
        <CreatePersonaDialog className="mb-5" />
        <PersonaCard personaData={personaData} />
      </div>
    </div>
  )
}

export type PersonaData = {
  name: string
  gender: string
  age: number
  occupation: string
  education: string
  income: string
  familyStructure: string
  hobbies: string
  personality: string
  workGoal: string
  currentSituation: string
}
