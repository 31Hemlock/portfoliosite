import { TabContentData } from '@/types/TabContentTypes'

export const ResumeTabContent: TabContentData = {
  content: (
    <>
      <div className="aspect-[1/1.3] w-full border shadow-lg">
        <iframe
          src="/src/assets/pdf/resume.pdf"
          className="w-full h-full border-none"
          loading="lazy"
        />
      </div>{' '}
    </>
  ),
}
