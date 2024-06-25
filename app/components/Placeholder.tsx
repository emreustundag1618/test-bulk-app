import { Text } from "@shopify/polaris";

const Placeholder = ({label = '', height = 'auto', width = 'auto'}) => {
    return (
      <div
        style={{
          background: 'var(--p-color-border-interactive-subdued)',
          height: height,
          width: width,
          borderRadius: 'inherit',
        }}
      >
        <div
          style={{
            color: 'var(--p-color-text)',
          }}
        >
          <Text as="p" variant="bodyMd">
            {label}
          </Text>
        </div>
      </div>
    );
  };

export default Placeholder;
