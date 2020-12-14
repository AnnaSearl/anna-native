import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import RNImagePicker from 'react-native-image-picker';
import Icon from '../icon';
import { deepClone } from '../_util';
import styles from './style';

const prefixCls = 'image-picker';

export interface ImagePickerProps {
  files?: string[];
  multiple?: boolean;
  multipleCount?: number;
  sizeType?: string[];
  sourceType?: string[];
  deletable?: boolean;
  disabled?: boolean;
  maxCount?: number;
  children?: React.ReactNode;
  onChange?: (e: string[]) => void;
}

const ImagePicker: React.FC<ImagePickerProps> = props => {
  const { files = [], onChange, maxCount } = props;

  const handleAddFile = () => {
    const options = {
      title: '',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '从相册中选取',
      cancelButtonTitle: '取消',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    (RNImagePicker as any).showImagePicker(options, (response: any) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const targetFiles = response.uri;
        const newFiles = files.concat(targetFiles);
        onChange?.(newFiles);
      }
    });
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
            <Icon name="line-error-32" color="#FDFFFD" size={12} />
          </Pressable>
        </View>
      ))}
      {!maxCount || files.length < maxCount ? (
        <Pressable style={styles[`${prefixCls}-btn`]} onPress={handleAddFile}>
          <Text style={styles[`${prefixCls}-text`]}>+</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default ImagePicker;
