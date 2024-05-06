import { PageTitle } from '@/components/PageTitle'
import { CodeBlock } from '@/components/CodeBlock'

interface Props {
  file: string
}

export const ProjectFileView: React.FC<Props> = ({ file }) => (
  <div>
    <div className="pt-5">
      <PageTitle>Sources</PageTitle>
    </div>
    <div className="pt-5">
      <CodeBlock code={file} language={{ type: 'yaml' }} />
    </div>
  </div>
)
