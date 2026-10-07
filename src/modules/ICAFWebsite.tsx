import { ContentCard } from '@/components/ContentCard'
import { IntraSiteLinkWrapper, LinkWrapper } from '@/components/LinkWrapper'
import { SB } from '@/components/utils/SB'
import galleryImage from '@/assets/img/icaf_gallery.png'
import {
  CoreTabContentData,
  TabContentData,
  divider,
  leftMainHeaderClasses,
  mainHeaderClasses,
  paragraphClasses,
} from '@/types/TabContentTypes'

const repositoryUrl =
  'https://github.com/international-child-art-foundation/icaf-vite'

export const ICAFWebsiteCoreTabContent: CoreTabContentData = {
  media: {
    id: 'icaf-website',
    type: 'image',
    src: galleryImage,
    alt: 'The artwork gallery on the ICAF website',
    dims: { h: 1014, w: 1862 },
  },
  title: 'ICAF Website',
  subtitle: 'A digital home for the International Child Art Foundation.',
  link: 'icaf-website',
}

export const ICAFWebsiteTabContent: TabContentData = {
  ...ICAFWebsiteCoreTabContent,
  content: (
    <ContentCard>
      <p className={`${mainHeaderClasses}`}>
        {ICAFWebsiteCoreTabContent.subtitle}
      </p>
      {divider}
      <p className={`${paragraphClasses}`}>
        This project is a rebuild of{' '}
        <LinkWrapper url="https://www.icaf.org" text="icaf.org" />, ICAF's
        central website that serves as its digital home. In addition to the
        rebuild, I added a fully functional art gallery and account system,
        hosted with AWS using a stack very similar to that of MyFavoriteSport's{' '}
        <IntraSiteLinkWrapper
          urlSuffix="serverless-backend-api"
          text="Serverless Backend API"
        />
        .
      </p>

      <p className={`${leftMainHeaderClasses}`}>Agentic Programming</p>
      {divider}
      <p className={`${paragraphClasses}`}>
        ICAF's gallery and backend were built in tandem with OpenAI's{' '}
        <LinkWrapper url="https://openai.com/codex" text="Codex" />, an agentic
        programming platform. When I found that ChatGPT could design a
        plausible-looking database that was nevertheless filled with logical
        inconsistencies and inefficient indexing, I{' '}
        <LinkWrapper url="https://dynamodbbook.com/" text="did research" /> and
        wrote the core database schema as an Excel file, along with a set of
        access patterns that would be supported by the system, and created
        scripts to feed that data into my active Codex session. Once GPT 5.6 Sol
        had those designs at its disposal, it was very efficiently able to code
        a fully functional API with few errors, which I manually fixed. The
        result was several thousand lines of rigorously designed and tested AWS
        scaffolding and API code, finished within two months alongside other
        development and requirements gathering processes.
      </p>
      <p className={`${leftMainHeaderClasses}`}>Gallery</p>
      {divider}
      <p className={`${paragraphClasses}`}>
        The <LinkWrapper url="https://www.icaf.org/gallery" text="gallery" />{' '}
        was the central challenge of the site. I wanted to allow users from all
        over the world to submit artwork, free of charge, for their own children
        or children in their care. I worked closely with ICAF's legal advisor to
        determine exactly what functionality we could promise to our users, and
        created a solution that does not expose ICAF to legal liability, while
        still allowing users the freedom of artwork submission without an
        account.
      </p>

      <p className={`${leftMainHeaderClasses}`}>Technology</p>
      {divider}
      <p className={`${paragraphClasses}`}>
        The frontend uses <SB>React</SB>, <SB>TypeScript</SB>, <SB>Vite</SB>,
        and <SB>Tailwind CSS</SB>. It connects to a serverless AWS backend built
        with <SB>API Gateway</SB>, <SB>Lambda</SB>, <SB>DynamoDB</SB>,{' '}
        <SB>S3</SB>, and <SB>Cognito</SB>.
      </p>

      <p className={`${leftMainHeaderClasses}`}>Source code</p>
      {divider}
      <p className={`${paragraphClasses}`}>
        The project is available in the{' '}
        <LinkWrapper url={repositoryUrl} text="ICAF Vite repository" />.
      </p>
    </ContentCard>
  ),
}
