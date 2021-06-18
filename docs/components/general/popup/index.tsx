import * as React from 'react';
import { View, Text } from 'react-native';
import { Popup, Button } from 'anna-native';

export default () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);

  return (
    <>
      <Button type="primary" onPress={() => setShow(true)}>
        Click here
      </Button>

      <Button type="primary" onPress={() => setShow1(true)}>
        Popup With Title
      </Button>

      <Popup
        open={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <View style={{ padding: 130 }}>
          <Text>Content</Text>
        </View>
      </Popup>

      <Popup
        open={show1}
        title="Title"
        onClose={() => {
          setShow(false);
        }}
      >
        <View style={{ padding: 130 }}>
          <Text>Content</Text>
        </View>
      </Popup>
    </>
  );
};
