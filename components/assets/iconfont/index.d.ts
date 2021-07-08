/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'Ic-fil-Select' | 'line-warning' | 'tab_icon_zhaohuo' | 'icon-communicate' | 'icon_right_line' | 'icon_home_msg' | 'logo' | 'line-photo' | 'tab_my' | 'tab_msg' | 'tab_home' | 'tab_jinhuodan' | 'fill-error' | 'delete_lajitong' | 'line-doubt' | 'switch' | 'line-logistIcs' | 'ic-line-eliminate' | 'disabled' | 'select' | 'phone' | 'line-increase' | 'purchaselist' | 'custom' | 'search' | 'after_sale' | 'back' | 'close' | 'all_orders' | 'class_fill' | 'delete' | 'company' | 'Contact_customer_service' | 'edit' | 'for_the_payment' | 'home_fill' | 'minus' | 'my_fill' | 'filter' | 'location2' | 'location' | 'message' | 'pull_down' | 'purchaselist_fill' | 'plus' | 'selected' | 'share_link' | 'right' | 'Share_Moments' | 'share_pictures' | 'share' | 'Share_WeChat' | 'to_send_the_goods' | 'wait_for_receiving' | 'WeChat' | 'unselected' | 'pull_up';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
