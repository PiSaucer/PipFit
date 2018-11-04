
function mySettings(props) {
  return (
    <Page>
      <Section
  description={<Text> By: PiSaucer </Text>}
  title={<Text bold align="left">PIP-BOY</Text>}>
  <Text>
    This is a very basic demo settings page to show off some of the current
    capabilities of the Companion Settings library.
  </Text>
</Section>
         <ColorSelect
          settingsKey="color"
          colors={[
            {color: "tomato"},
            {color: "sandybrown"},
            {color: "#FFD700"},
            {color: "#ADFF2F"},
            {color: "deepskyblue"},
            {color: "plum"}
          ]}
        />
    </Page>
  );
}

registerSettingsPage(mySettings);
