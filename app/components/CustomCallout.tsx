import {CalloutCard} from '@shopify/polaris';


interface CustomCalloutCardProps {
    title: string;
    illustration: string;
    primaryActionContent: string;
    primaryActionUrl: string;
    children: React.ReactNode;
  }


export default function CustomCalloutCard(props:CustomCalloutCardProps) {
    const {title, illustration, primaryActionContent, primaryActionUrl, children} = props;
  return (
    <CalloutCard
      title={title}
      illustration={illustration}
      primaryAction={{
        content: primaryActionContent,
        url: primaryActionUrl,
      }}
    >
      {children}
    </CalloutCard>
  );
}