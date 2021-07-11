import React from 'react';
import { Cascade } from 'anna-native';
import { Categorys } from '../../mock';

export default () => {
  const handleChange = (value: any[]) => {
    console.log(value);
  };

  return <Cascade name="品类" options={Categorys} onChange={handleChange} />;
};
