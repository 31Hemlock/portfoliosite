import { CoreTabContentData, TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';

const coverVidUrl = new URL('../assets/img/machine_learning.png', import.meta.url).href;

export const MachineLearningCoreTabContentData: CoreTabContentData = {
  media: {
    type: 'image',
    src: coverVidUrl,
    alt: 'Machine learning',
    dims: {h: 944, w: 380}
  },
  title: "Machine Learning",
  subtitle: "Predict whether it will rain in Northern Virginia.",
  link: "machine-learning",
}

export const MachineLearningTabContent: TabContentData = {
    ...MachineLearningCoreTabContentData,
    content: 
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
        {MachineLearningCoreTabContentData.subtitle}
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
            I feed the data I gather from Python Data Manipulation to a machine learning algorithm that I am still developing.
        </p>
        <p className={`${paragraphClasses}`}>
            The machine learning algorithm is a binary classification model that was trained by my script <i>OverUnderSampling</i>, which utilizes the high-level <SB>Keras</SB> API through <SB>Tensorflow</SB>. 
            I use a sequential model that outputs to a single-node sigmoid activation layer in order to make my binary ('yes it will rain' or 'no it will not rain') prediction. 
            While developing the algorithm I noticed it had a tendency to predict the null hypothesis, so I oversampled and undersampled the dataset using <SB>SMOTETomek</SB> from <SB>Imblearn</SB> to create a balanced training set.
        </p>
        <p className={`${paragraphClasses}`}>
            When I finish tweaking the algorithm, I will be sending tweets from my Raspberry Pi to Twitter each morning with my prediction.
        </p>
      </ContentCard>
      <ContentCard>
        <p className={`${leftMainHeaderClasses}`}>
          Source Code
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
        The source code is available <LinkWrapper url={`${CodeLink}NovaRainBot`} text="here"/>.
        </p>
      </ContentCard>
      
    </>
};
