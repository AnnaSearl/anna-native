//
//  UIColor+ArwenUIColor.h
//  Mall
//
//  Created by 陈嘉文 on 2021/1/31.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface UIColor (ArwenUIColor)

+ (UIColor *)randColor;

+ (UIColor *)colorWithHexString:(NSString *)colorStr;

+ (UIColor *)colorWithHexString:(NSString *)colorStr alpha:(CGFloat)alpha;

// +(UIColor *)colorWithRgba:();

@end

NS_ASSUME_NONNULL_END
