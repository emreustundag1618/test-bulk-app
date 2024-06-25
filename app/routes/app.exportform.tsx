import { ActionFunction } from "@remix-run/node";
import { Page} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export interface IExportFormProps {
}

export const action: ActionFunction = async({request}) => {
    return null;
}

export default function ExportForm (props: IExportFormProps) {


  return (
    <Page>
      <TitleBar title="Export form">
        <button variant="breadcrumb">
            Home
        </button>
        <button onClick={() => {}}>
            Back
        </button>
        <button variant="primary" onClick={() => {}}>
            Export
        </button>
      </TitleBar>
    </Page>
  );
}

