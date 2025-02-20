type dims = { h: number; w: number }

export interface BaseMedia {
  id: string
  type: 'image' | 'video'
  poster?: string
  src: string
  lqsrc?: string
  alt: string
  dims?: dims
}

export interface CustomMedia {
  id: string
  type: 'custom'
  content: React.ReactNode
}

export type Media = BaseMedia | CustomMedia

export type titleStyle = 'header' | 'body'

export interface CoreTabContentData {
  media?: Media
  title?: string
  subtitle?: string
  sourceCode?: string
  link?: string
}

export interface TabContentData extends CoreTabContentData {
  content: React.ReactNode
}

// Styles
export const titleClasses =
  'font-medium text-center text-4xl md:text-5xl text-textcolor'
export const previewTitleClasses =
  'font-medium text-center text-2xl md:text-3xl text-balance text-textcolor'
export const mainHeaderClasses =
  'font-semibold text-center text-3xl mb-4 pt-6 text-textcolor'
export const leftMainHeaderClasses =
  'font-semibold text-xl mb-4 pt-4 text-textcolor'
export const sourceCodeClasses = 'font-semibold text-xl mb-4 pt-4'
export const secondaryHeaderClasses =
  'font-medium text-left text-2xl mb-2 text-textcolor'
export const divider = <div className="border-b border-black mb-4" />
export const thinDivider = <div className="border-b border-grey mb-4" />
export const subheaderDivider = <div className="border-b border-grey" />
export const paragraphClasses = 'prose prose-lg pt-4 pb-4 text-textcolor'
export const linkClasses =
  'text-blue-600 visited:text-purple-600 cursor-pointer'

export const functionClasses =
  'font-mono text-sm bg-gray-100 px-1 py-0.5 rounded text-gray-700'
export const objectClasses =
  'font-mono text-sm bg-gray-50 px-1 py-0.5 rounded text-gray-800'
export const clickableFunctionClasses =
  'font-mono text-sm bg-gray-100 px-1 py-0.5 rounded cursor-pointer hover:bg-gray-200 hover:text-blue-600 transition-colors text-blue-800 visited:text-purple-500'
export const clickableObjectClasses =
  'font-mono text-sm bg-gray-50 px-1 py-0.5 rounded text-blue-800 cursor-pointer hover:bg-gray-100 hover:text-blue-900 transition-colors visited:text-purple-500'
