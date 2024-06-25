import {
  Page,
  Card,
  Layout,
  Text,
  BlockStack,
  Link,
  Button,
  Box,
} from "@shopify/polaris";
import React from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import DropZoneExample from "~/components/CustomDropZone";
import Placeholder from "~/components/Placeholder";
import CustomCalloutCard from "~/components/CustomCallout";

import { authenticate } from "../shopify.server";
import { TitleBar } from "@shopify/app-bridge-react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

const Index = (props: Props) => {
  return (
    <Page fullWidth={false}>
      <TitleBar title="Test Bulk App">
        <button variant="primary">Change this later</button>
      </TitleBar>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <Text as="h2" variant="headingMd">
                Export
              </Text>
              <br />
              <Text as="p">
                You can select the particular data items to export
              </Text>
              <br />
              <Button url={`shopify:admin/products/sadfsad`} target="_blank">
                New Export
              </Button>
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card>
              <Text as="h2" variant="headingMd">
                Import
              </Text>
              <br />
              <DropZoneExample />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card>
              <Box padding="300" background="bg-fill-info" borderRadius="100">
                <Placeholder label="You have 0 scheduled jobs" />
              </Box>
            </Card>
          </Layout.Section>
          <Layout.Section>
            <CustomCalloutCard
              title={"Help & Support"}
              illustration={""}
              primaryActionContent={"Contact support"}
              primaryActionUrl={""}
              children={
                "If you have any questions, issues, missing features or concerns - dont guess, dont wait - contact us we will help you."
              }
            />
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
};

export default Index;
