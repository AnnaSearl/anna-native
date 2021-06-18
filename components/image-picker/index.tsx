import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { launchCamera, launchImageLibrary, CameraOptions } from 'react-native-image-picker';
import Icon from '../icon';
import ActionSheet, { ActionSheetAction } from '../action-sheet';
import { deepClone } from '../_util';
import styles from './style';

const prefixCls = 'image-picker';

const actions = [
  { text: '相机', value: 0 },
  { text: '从相册中选择', value: 1 },
];

export interface ImagePickerProps {
  action?: 'camera' | 'photos' | 'mix';
  files?: string[];
  multiple?: boolean;
  multipleCount?: number;
  compress?: boolean; // 是否压缩图片
  sizeType?: string[];
  sourceType?: string[];
  deletable?: boolean;
  disabled?: boolean;
  maxCount?: number;
  children?: React.ReactNode;
  onChange?: (e: string[]) => void;
  onAddBefore?: () => boolean | undefined; //选择照片之前事件
}

const ImagePicker: React.FC<ImagePickerProps> = props => {
  const { action = 'mix', files = [], onChange, onAddBefore, maxCount, compress } = props;

  const [open, setOpen] = useState(false);

  let options: CameraOptions = {
    mediaType: 'photo',
  };
  if (compress) {
    options = {
      ...options,
      maxWidth: 1500,
      maxHeight: 1500,
    };
  }

  const handldeAddBefore = () => {
    if (onAddBefore) {
      const canContinue = onAddBefore?.();
      return canContinue;
    }
    return true;
  };

  const handleCamera = () => {
    const canContinue = handldeAddBefore();
    if (!canContinue) {
      return;
    }
    launchCamera(options, response => {
      // @ts-ignore
      if (response?.assets?.length) {
        // @ts-ignore
        const targetFiles = response?.assets?.map(i => i?.uri || '');
        const newFiles = files.concat(targetFiles);
        onChange?.(newFiles);
        setOpen(false);
      }
    });
  };

  const handlePhotos = () => {
    const canContinue = handldeAddBefore();
    if (!canContinue) {
      return;
    }
    launchImageLibrary(options, response => {
      // @ts-ignore
      if (response?.assets?.length) {
        // @ts-ignore
        const targetFiles = response?.assets?.map(i => i?.uri || '');
        const newFiles = files.concat(targetFiles);
        onChange?.(newFiles);
        setOpen(false);
      }
    });
  };

  const handleAddFile = () => {
    if (action === 'mix') {
      setOpen(true);
      return;
    }

    if (action === 'camera') {
      handleCamera();
    }

    if (action === 'photos') {
      handlePhotos();
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = (act: ActionSheetAction) => {
    if (act?.value === 0) {
      handleCamera();
    }
    if (act?.value === 1) {
      handlePhotos();
    }
  };

  const handleDeleteFile = (e: any, index: number) => {
    e.stopPropagation();
    let newValue = deepClone(files);
    newValue.splice(index, 1);
    newValue = newValue.map((item: string) => item);
    onChange?.(newValue);
  };

  return (
    <View style={styles[prefixCls]}>
      {files?.map((file, index) => (
        <View key={index} style={styles[`${prefixCls}-file`]}>
          <Image source={{ uri: file }} style={styles[`${prefixCls}-image`]} />
          <Pressable
            style={styles[`${prefixCls}-delete`]}
            onPress={e => handleDeleteFile(e, index)}
          >
            <Icon name="close" color="#FDFFFD" size={12} />
          </Pressable>
        </View>
      ))}

      {!maxCount || files.length < maxCount ? (
        <Pressable style={styles[`${prefixCls}-add`]} onPress={handleAddFile}>
          <View style={styles[`${prefixCls}-add-icon`]}>
            <Icon name="line-photo" color="#BABEC6" size={24} />
          </View>
          <Text style={styles[`${prefixCls}-add-text`]}>
            {action === 'camera' ? '拍照上传' : '上传图片'}
          </Text>
        </Pressable>
      ) : null}

      <ActionSheet
        cover
        cancelText="取消"
        open={open}
        actions={actions}
        onCancel={handleCancel}
        onChange={handleChange}
      />
    </View>
  );
};

export default ImagePicker;
