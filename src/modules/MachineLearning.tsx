import { CoreTabContentData, TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { IntraSiteLinkWrapper, LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';
import { FunctionWrapper } from '@/components/FunctionWrapper';
import machineLearningImage from "../assets/img/machine_learning.png"

export const MachineLearningCoreTabContentData: CoreTabContentData = {
  media: {
    type: 'image',
    src: machineLearningImage,
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
            I feed the data I gather from <IntraSiteLinkWrapper urlSuffix="python-data-manipulation" text="Python Data Manipulation"/> to a machine learning algorithm that I am still developing.
        </p>
        <p className={`${paragraphClasses}`}>
            The machine learning algorithm is a binary classification model that was trained by my script <FunctionWrapper url={`${CodeLink}NovaRainBot/blob/master/OverUnderSampling.py`} text="OverUnderSampling"/>,
            which utilizes the high-level <LinkWrapper url="https://keras.io/api/" text="Keras"/> API through <LinkWrapper url="https://www.tensorflow.org/" text="TensorFlow"/>. 
            I use a <LinkWrapper url="https://keras.io/guides/sequential_model/" text="sequential model"/> that outputs to a single-node <SB>sigmoid activation layer</SB> in order to make my binary ('yes it will rain' or 'no it will not rain') prediction. 
            While developing the algorithm I noticed it had a tendency to predict the null hypothesis, so I oversampled and undersampled the dataset using <LinkWrapper url="https://imbalanced-learn.org/dev/references/generated/imblearn.combine.SMOTETomek.html" text="SMOTETomek"/> from <LinkWrapper url="https://imbalanced-learn.org/stable/" text="IMBLearn"/> to create a balanced training set.
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
