// color
const $lightBase = 'rgba(255, 255, 255, 1)'; // #FFFFFF
const $light1 = $lightBase; // #FFFFFF
const $light2 = 'rgba(254, 255, 254, 1)'; // #FEFFFE
const $light3 = 'rgba(253, 255, 253, 1)'; // #FDFFFD
const $light4 = 'rgba(250, 250, 250, 1)'; // #FAFAFA
const $light5 = 'rgba(249, 251, 249, 1)'; // #F9FBF9
const $light6 = 'rgba(247, 247, 247, 1)'; // #F7F7F7
const $light7 = 'rgba(246, 246, 246, 1)'; // #F6F6F6
const $light8 = 'rgba(244, 244, 244, 1)'; // #F4F4F4
const $light9 = 'rgba(242, 242, 242, 1)'; // #F2F2F2
const $light10 = 'rgba(241, 241, 241, 1)'; // #F1F1F1

const $gray1 = 'rgba(237, 237, 239, 1)'; // #EDEDEF
const $gray2 = 'rgba(236, 236, 236, 1)'; // #ECECEC
const $gray3 = 'rgba(235, 236, 237, 1)'; // #EBECED
const $gray4 = 'rgba(232, 232, 235, 1)'; // #E8E8EB
const $gray5 = 'rgba(230, 230, 230, 1)'; // #E6E6E6

const $darkBase = 'rgba(0, 0, 0, 1)'; // #000
const $dark1 = $darkBase; // #000
const $dark2 = 'rgba(51, 51, 51, 1)'; // #333
const $dark3 = 'rgba(102, 102, 102, 1)'; // #666
const $dark4 = 'rgba(153, 153, 153, 1)'; // #999

const $blueBase = '#1467FF';
const $redBase = 'rgba(255, 77, 79, 1)'; // #FF4D4F
const $pinkBase = 'rgba(255, 119, 119, 1)'; // #FF7777

// brand
const $brandColor = '#9966FF';
const $brandSecondaryColor = '#ECF5FF';

// auxiliary
const $blueColor = '#2879FF';
const $orangeColor = '#FF5B21';
const $greenColor = '#00B94F';
const $yellowColor = '#F58F00';
const $redColor = '#F81A33';

// font
const $fontColor = '#1B2844';
const $fontColor1 = '#495369';
const $fontColor2 = '#697184';
const $fontColor3 = '#9DA1AD';

// danger
const $dangerColor = $redBase;

// active
const $activeBgBase = $gray4;
const $activeBg1 = $gray2;
const $activeBg2 = $gray3;
const $activeBg3 = $gray4;

// btn
const $btnDefaultBg = $gray1;

const theme = {
  $lightBase: $lightBase,
  $light1: $light1,
  $light2: $light2,
  $light3: $light3,
  $light4: $light4,
  $light5: $light5,
  $light6: $light6,
  $light7: $light7,
  $light8: $light8,
  $light9: $light9,
  $light10: $light10,

  $gray1: $gray1,
  $gray2: $gray2,
  $gray3: $gray3,
  $gray4: $gray4,
  $gray5: $gray5,

  $darkBase: $darkBase,
  $dark1: $dark1,
  $dark2: $dark2,
  $dark3: $dark3,
  $dark4: $dark4,

  $blueBase: $blueBase,
  $redBase: $redBase,
  $pinkBase: $pinkBase,

  $brandColor: $brandColor,
  $brandSecondaryColor: $brandSecondaryColor,
  $contrastiveColor: $lightBase,
  $blueColor: $blueColor,
  $orangeColor: $orangeColor,
  $greenColor: $greenColor,
  $yellowColor: $yellowColor,
  $redColor: $redColor,

  $fontColor: $fontColor,
  $fontColor1: $fontColor1,
  $fontColor2: $fontColor2,
  $fontColor3: $fontColor3,

  $dangerColor: $dangerColor,

  $activeBgBase: $activeBgBase,
  $activeBg1: $activeBg1,
  $activeBg2: $activeBg2,
  $activeBg3: $activeBg3,

  $btnDefaultBg: $btnDefaultBg,
};

export default theme;

export const setTheme = (customTheme: any) => {
  Object.assign(theme, customTheme);
};
