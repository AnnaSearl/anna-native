import React from 'react';
import PropTypes from 'prop-types';
import RootSiblings from 'react-native-root-siblings';
import ToastView from './ToastView';
import { StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native';

const defaultText = '加载中...';
let rootSiblings;

class Loading {
  static show = ({ content } = {}) => {
    if (rootSiblings !== undefined) {
      Loading.hide();
    }
    rootSiblings = new RootSiblings((<HUD content={content} />));
  };

  static showToast = ({ toastOpts } = {}) => {
    console.log('1');
    if (rootSiblings !== undefined) {
      Loading.hide();
    }
    rootSiblings = new RootSiblings((<ToastView {...toastOpts} />));
  };

  static hide = () => {
    if (rootSiblings) {
      rootSiblings.destroy();
      rootSiblings = undefined;
    }
  };
}

export class HUD extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    textStyle: PropTypes.any,
    loadingStyle: PropTypes.any,
    text: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.timer = 0;
    this.state = {
      text: props.content || defaultText,
    };
  }

  componentWillUnmount() {}

  render() {
    return (
      <Modal animationType="fade" transparent={true} visible={true} onRequestClose={() => {}}>
        <View style={styles.container}>
          <View style={[styles.load_box, this.props.loadingStyle]}>
            <ActivityIndicator
              animating={true}
              color={this.props.color || '#FFF'}
              size="large"
              style={styles.load_progress}
            />
            <Text style={[styles.load_text, this.props.textStyle]}>{this.state.text}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  load_box: {
    width: 100,
    height: 100,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  load_progress: {
    width: 50,
    height: 50,
  },
  load_text: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgba(178,178,178,0.8)',
  },
});

export default Loading;
