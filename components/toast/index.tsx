import { NativeModules } from 'react-native';

const { AnnaNative } = NativeModules;

export interface ToastShowOptions {
  data?: string;
  duration?: number;
}

class Toast {
  static show(options: ToastShowOptions | string) {
    if (typeof options === 'string') {
      AnnaNative.showToast(options, 2000);
    }
    if (options && typeof options === 'object') {
      AnnaNative.showToast(options.data, options.duration || 2000);
    }
  }

  static showLoading(text?: string) {
    let _text = text;
    if (!_text && _text !== '') {
      _text = '加载中...';
    }
    AnnaNative.showLoading(_text);
  }

  static hideLoading() {
    AnnaNative.hideLoading();
  }

  // 向前兼容
  static position = {
    CENTER: null,
  };
}

export default Toast;
