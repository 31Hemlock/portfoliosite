import { TabContentData, CoreTabContentData } from '@/types/TabContentTypes'
import { ResumePdf } from '@/components/ResumePdf'
import { IntraSiteLinkWrapper } from '@/components/LinkWrapper'
import { ResumeButton } from '@/components/ResumeButton'

export const ResumeCoreTabContent: CoreTabContentData = {
  link: 'resume',
  hideSidebar: true,
}

export const ResumeTabContent: TabContentData = {
  ...ResumeCoreTabContent,
  content: (
    <div className="px-4 py-4 w-full max-w-[800px] mx-auto">
      <div className=" flex place-content-center gap-4 mx-auto w-full mb-4 text-center">
        <ResumeButton url="/" text="Return home" />
        <ResumeButton
          url="/public/resume.pdf"
          download={true}
          text="Download PDF"
        />
      </div>
      <ResumePdf />
    </div>
  ),
  padded: false,
}
