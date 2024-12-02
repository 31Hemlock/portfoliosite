
import { useState } from 'react';
import { CustomTabContent } from '../CustomTabContent';
import { ContentCard } from '@/components/ContentCard';
import { 
  mainHeaderClasses, 
  divider, 
  subheaderDivider,
  paragraphClasses, 
  leftMainHeaderClasses, 
  secondaryHeaderClasses, 
  sourceCodeClasses, 
  linkClasses,
  thinDivider,
  CoreTabContentData
} from '@/types/TabContentTypes';
import { LinkWrapper } from '@/components/LinkWrapper';
import { CustomTabContentProps } from '@/types/CustomTabContentTypes';
import { ServiceMenu } from '@/components/ServiceMenu';
import { SB } from '@/components/utils/SB';
import Amplify from "../assets/img/aws_service/Amplify.svg";
import APIGateway from "../assets/img/aws_service/APIGateway.svg";
import CloudFront from "../assets/img/aws_service/CloudFront.svg";
import CloudWatch from "../assets/img/aws_service/CloudWatch.svg";
import Cognito from "../assets/img/aws_service/Cognito.svg";
import DynamoDB from "../assets/img/aws_service/DynamoDB.svg";
import Lambda from "../assets/img/aws_service/Lambda.svg";
import Route53 from "../assets/img/aws_service/Route53.svg";
import S3 from "../assets/img/aws_service/S3.svg";
import Stripe from "../assets/img/aws_service/Stripe.png"
import { 
  SimpleServicesInterface, 
  ExtendedServicesInterface, 
} from '@/types/ServiceTypes';

export const simpleServices: SimpleServicesInterface = {
  Amplify: {
    url: Amplify,
    color: "rgba(226,65,72,1)",
  },
  APIGateway: {
    url: APIGateway,
    color: "rgba(113,72,193,1)",
  },
  CloudFront: {
    url: CloudFront,
    color: "rgba(139,98,218,1)",
  },
  CloudWatch: {
    url: CloudWatch,
    color: "rgba(219,65,123,1)",
  },
  Cognito: {
    url: Cognito,
    color: "rgba(202,54,60,1)",
  },
  DynamoDB: {
    url: DynamoDB,
    color: "rgba(92,108,217,1)",
  },
  Lambda: {
    url: Lambda,
    color: "rgba(224,127,36,1)",
  },
  Route53: {
    url: Route53, 
    color: "rgba(142,102,219,1)",
  },
  S3: {
    url: S3,
    color: "rgba(91,152,66,1)",
  },
  Stripe: {
    url: Stripe,
    color: "rgba(99,91,255,1)",
  }
};

export const MFSBackendCoreTabContent: CoreTabContentData = {
  title: "Serverless Engine for Art Competition",
  link: "serverless-backend-api",
  subtitle: "Click the icons above to see more details!",
  media: { // technically not core tab content, but overwritten when not previewed
    type: "custom",
    content: <ServiceMenu interactable={false}/>
  }
};

const MFSBackend = () => {
  const [activeService, setActiveService] = useState<string>("");
  const extendedServices: ExtendedServicesInterface = {
    Amplify: {
      ...simpleServices.Amplify,
      content: (
        <ContentCard>
          <p className={`${leftMainHeaderClasses}`}>
            Amplify
          </p>
          {subheaderDivider}
          <p className={`${paragraphClasses}`}>
            <SB>Amplify</SB> hosts our application. It also serves as the central point to which all other services can be added. 
          </p>
          <p className={`${paragraphClasses}`}>
            We chose Amplify over similar hosting services like Vercel due to its superior customization capability, lower cost, and simpler integration with other AWS services.
          </p>
          <a className={`${linkClasses} my-12`} onClick={() => setActiveService("")}>{`<< Return to overview`}</a>
        </ContentCard>
      ),
    },
    APIGateway: {
      ...simpleServices.APIGateway,
      content: (
        <ContentCard>
          <p className={`${leftMainHeaderClasses}`}>
            APIGateway
          </p>
          {subheaderDivider}
          <p className={`${paragraphClasses}`}>
            The API is used by the frontend to receive or alter information that exists in the system. 
            We use <SB>APIGateway</SB> to authenticate users, handle artwork submission, and display up-to-date artworks in the gallery, among other things. 
          </p>
          <p className={`${paragraphClasses}`}>
            The API is powered by <a className={linkClasses} onClick={() => setActiveService("Lambda")}>Lambda</a>
            ; whenever a request is made to APIGateway, a Lambda function receives it and decides how to respond.
          </p>
          <a className={`${linkClasses} my-12`} onClick={() => setActiveService("")}>{`<< Return to overview`}</a>
        </ContentCard>
      ),
    },
    CloudFront: {
      ...simpleServices.CloudFront,
      content: (
        <ContentCard>
          <p className={`${leftMainHeaderClasses}`}>
            CloudFront
          </p>
          {subheaderDivider}
          <p className={`${paragraphClasses}`}>
            The application holds all user-submitted artwork in an <a className={linkClasses} onClick={() => setActiveService("S3")}>S3</a> bucket. 
            S3 is better at storing data than it is at serving it to users. 
            <SB> CloudFront</SB> is a cache which delivers data to our users more quickly and efficiently than S3.  
          </p>
          <a className={`${linkClasses} my-12`} onClick={() => setActiveService("")}>{`<< Return to overview`}</a>
        </ContentCard>
      ),
    },
    CloudWatch: {
      ...simpleServices.CloudWatch,
      content: (
        <ContentCard>
          <p className={`${leftMainHeaderClasses}`}>
            CloudWatch
          </p>
          {subheaderDivider}
          <p className={`${paragraphClasses}`}>
            The application uses <SB>CloudWatch</SB> to create and store logs about user behavior, which helps with troubleshooting and debugging.
          </p>
          <p className={`${paragraphClasses}`}>
            CloudWatch also enables the use of alarms, which notify me when certain usage patterns are reached, or if the monthly bill is predicted to exceed our budget. 
            For such cases, a 
            <a className={linkClasses} onClick={() => setActiveService("Lambda")}> Lambda </a> 
            function exists which can temporarily disable features of the site until I'm available to take a closer look at usage patterns.
          </p>
          <a className={`${linkClasses} my-12`} onClick={() => setActiveService("")}>{`<< Return to overview`}</a>
        </ContentCard>
      ),
    },
    Cognito: {
      ...simpleServices.Cognito,
      content: (
        <ContentCard>
          <p className={`${leftMainHeaderClasses}`}>
            Cognito
          </p>
          {subheaderDivider}
          <p className={`${paragraphClasses}`}>
            The application uses <SB>Cognito</SB> to authenticate our users. Cognito maintains a database of user information, including emails and passwords, which it uses internally to authenticate users.
          </p>
          <p className={`${paragraphClasses}`}>
            When a user logs in or performs an action related to their account, an API call is made to 
            <a className={linkClasses} onClick={() => setActiveService("APIGateway")}> APIGateway</a>, which then communicates with Cognito to obtain and relay the proper credientials (via secure, HTTPOnly cookies) to the client.
          </p>
          <a className={`${linkClasses} my-12`} onClick={() => setActiveService("")}>{`<< Return to overview`}</a>
        </ContentCard>
      ),
    },
    DynamoDB: {
      ...simpleServices.DynamoDB,
      content: (
        <ContentCard>
          <p className={`${leftMainHeaderClasses}`}>
            DynamoDB
          </p>
          {subheaderDivider}
          <p className={`${paragraphClasses}`}>
            While <a className={linkClasses} onClick={() => setActiveService("S3")}> S3 </a>
            stores our images and 
            <a className={linkClasses} onClick={() => setActiveService("Cognito")}> Cognito </a>
            stores user login information, <SB>DynamoDB</SB> stores general purpose user and artwork information.
          </p>
          <p className={`${paragraphClasses}`}>
            DynamoDB stores metadata about artwork (things like their title and vote total), and information about users (things like entry fee payment confirmation and submission status).
            For example, whenever a user visits our gallery page to see our artworks, an API call is sent to 
            <a className={linkClasses} onClick={() => setActiveService("APIGateway")}> APIGateway </a>
             which returns data from our ART entries in DynamoDB. 
          </p>

          <a className={linkClasses} onClick={() => setActiveService("")}>{`<< Return to overview`}</a>
        </ContentCard>
      ),
    },
    Lambda: {
      ...simpleServices.Lambda,
      content: (
        <ContentCard>
          <p className={`${leftMainHeaderClasses}`}>
            Lambda
          </p>
          {subheaderDivider}
          <p className={`${paragraphClasses}`}>
            We use <SB>Lambda </SB> functions to power our 
            <a className={linkClasses} onClick={() => setActiveService("APIGateway")}> API</a>. We have three lambda functions, each created with a core purpose in mind.
          </p>
          {thinDivider}
          <p className={`${secondaryHeaderClasses}`}>
            Function 1: <i>usersLambda</i>
          </p>
          <p className={`${paragraphClasses}`}>
            This is the function which powers the API. Whenever an API request is made, usersLambda receives the request, interprets what kind of request was sent, and returns the relevant information to the client.
          </p>
          {thinDivider}
          <p className={`${secondaryHeaderClasses}`}>
            Function 2: <i>processImage</i>
          </p>
          <p className={`${paragraphClasses}`}>
            Users are asked to submit images up to 3mb in size. Each visit to the gallery page loads 20 images, and 60mb is a lot of data to transfer when considering costs and page load speed.
          </p>
          <p className={`${paragraphClasses}`}>
            To solve this problem (as well as strengthen our security posture), we use a Lambda function to create two copies of the user-submitted image; one for thumbnails and one for general display.
            These images have a significantly smaller file size than the originals. They're also stripped of any potentially malicious code which may have existed in the original image files.
          </p>
          {thinDivider}
          <p className={`${secondaryHeaderClasses}`}>
            Function 3: <i>emergencyShutdown</i>
          </p>
          <p className={`${paragraphClasses}`}>
            This function is set to run if we receive an unexpectedly large number of requests within too short of a time period. 
            The purpose of this function is to make the site inaccessible in the event of some kind of unexpected surge of page visits until I'm able to manually review the traffic. 
          </p>
        <a className={linkClasses} onClick={() => setActiveService("")}>{`<< Return to overview`}</a>
        </ContentCard>
      ),
    },
    Route53: {
      ...simpleServices.Route53,
      content: (
        <ContentCard>
          <p className={`${leftMainHeaderClasses}`}>
            Route53
          </p>
          {subheaderDivider}
          <p className={`${paragraphClasses}`}>
            <SB>Route53</SB> is a service which connects our server to our domain name, <LinkWrapper url="https://www.myfavoritesport.org" text="myfavoritesport.org"/>. 
            While the domain was acquired via GoDaddy, Route53 maintains its connection to our application. We chose Route53 over competitors for its simple integration with other AWS systems.
          </p>
          <a className={linkClasses} onClick={() => setActiveService("")}>{`<< Return to overview`}</a>
        </ContentCard>
      ),
    },
    S3: {
      ...simpleServices.S3,
      content: (
        <ContentCard>
          <p className={`${leftMainHeaderClasses}`}>
            S3
          </p>
          {subheaderDivider}
          <p className={`${paragraphClasses}`}>
            <SB>S3</SB> can be visualized as a big bucket that contains all of our image files. It serves as a central repository of image data which can be organized and streamlined by other services. 
            To reduce costs and increase image transfer speeds, we use the Content Delivery Network 
            <a className={linkClasses} onClick={() => setActiveService("CloudFront")}> CloudFront </a>
              to create temporary copies of our images and store them around the world. 
          </p>
          <a className={linkClasses} onClick={() => setActiveService("")}>{`<< Return to overview`}</a>
        </ContentCard>
      ),
    },
    Stripe: {
      ...simpleServices.Stripe,
      content: (
        <ContentCard>
          <p className={`${leftMainHeaderClasses}`}>
            Stripe
          </p>
          {subheaderDivider}
          <p className={`${paragraphClasses}`}>
            <SB>Stripe</SB> is a payment processing service that makes it simple to process the entry fee payment required of our users. 
            When artists first visit their dashboard, they're given the option to pay their entry fee, which leads them to a Stripe payment link.
            When the transaction is completed, Stripe sends that user's ID to our <a className={linkClasses} onClick={() => setActiveService("APIGateway")}>API</a>, which 
            updates the corresponding user's payment status in our database, <a className={linkClasses} onClick={() => setActiveService("DynamoDB")}>DynamoDB</a>. 
          </p>
          <a className={linkClasses} onClick={() => setActiveService("")}>{`<< Return to overview`}</a>
        </ContentCard>
        
      )
    }
  };

  const tabContent: CustomTabContentProps = {
    title: MFSBackendCoreTabContent.title,
    link: MFSBackendCoreTabContent.link,
    subtitle: MFSBackendCoreTabContent.subtitle,
    content: (
      <>
        <ServiceMenu interactable={true} activeService={activeService} setActiveService={setActiveService} />

        {!extendedServices[activeService]?.content && (
          <ContentCard>
            <p className={`${mainHeaderClasses}`}>
              {MFSBackendCoreTabContent.subtitle}
            </p>
            {divider}
            <p className={`${paragraphClasses}`}>
              I was tasked with leading the development of the backend for the{' '}
              <LinkWrapper url="https://icaf.org" text="International Child Art Foundation's" />{' '}
              online <LinkWrapper url="https://myfavoritesport.org" text="art competition" />. 
              With help from a number of talented volunteers, I used AWS products to handle serverless{' '}
              <a className={linkClasses} onClick={() => setActiveService("DynamoDB")}>data storage</a>,{' '}
              <a className={linkClasses} onClick={() => setActiveService("Amplify")}>web hosting</a>,{' '}
              <a className={linkClasses} onClick={() => setActiveService("Cognito")}>authentication</a>,{' '}
              <a className={linkClasses} onClick={() => setActiveService("Lambda")}>image processing</a>,{' '}
              <a className={linkClasses} onClick={() => setActiveService("CloudFront")}>caching</a>,{' '}
              <a className={linkClasses} onClick={() => setActiveService("Route53")}>routing</a>,{' '}
              <a className={linkClasses} onClick={() => setActiveService("CloudWatch")}>logging</a>, and to implement an{' '}
              <a className={linkClasses} onClick={() => setActiveService("APIGateway")}>API</a>.
            </p>
            <p className={`${paragraphClasses}`}>
              My team and I designed the database and API with cost optimization in mind. Additionally, I created a number of{' '}
              <a className={linkClasses} onClick={() => setActiveService("CloudWatch")}>alarms</a> and{' '}
              <a className={linkClasses} onClick={() => setActiveService("Lambda")}>automatic triggers</a> to prevent our project from exceeding our budget.
            </p>
          </ContentCard>
        )}

        {extendedServices[activeService]?.content}

        <ContentCard>
          <p className={`${sourceCodeClasses}`}>
            Source Code
          </p>
          {divider}
          <p className={`${paragraphClasses}`}>
            The source code is available <LinkWrapper url="https://github.com/international-child-art-foundation/arts-olympiad" text="here" />.
          </p>
        </ContentCard>
      </>
    ),
    activeService: activeService,
    setActiveService: setActiveService,
  };

  return <CustomTabContent {...tabContent}/>;
}

export default MFSBackend;
