//
//  UIColor+ArwenUIColor.m
//  Mall
//
//  Created by 陈嘉文 on 2021/1/31.
//

#import "UIColor+ArwenUIColor.h"

@implementation UIColor (ArwenUIColor)

+ (UIColor *)randColor {
    CGFloat r = arc4random_uniform(256);
    CGFloat g = arc4random_uniform(256);
    CGFloat b = arc4random_uniform(256);
    return [UIColor colorWithRed:r / 255.0f green:g / 255.0f blue:b / 255.0f alpha:1];
}


+ (UIColor *)colorWithHexString:(NSString *)colorStr {
    return [self colorWithHexString:colorStr alpha:1];
}

+ (UIColor *)colorWithHexString:(NSString *)colorStr alpha:(CGFloat)alpha {
    
    //移除前缀
    if ([colorStr hasPrefix:@"0X"] || [colorStr hasPrefix:@"0x"]) {
        colorStr = [colorStr substringFromIndex:2];
    }
    
    if ([colorStr hasPrefix:@"#"]) {
        colorStr = [colorStr substringFromIndex:1];
    }
    
    //判断长度
    if (colorStr.length != 6) {
        return [UIColor clearColor];
    }
    
    //提取值
    NSRange range;
    range.length = 2;
    //r
    range.location = 0;
    NSString *rStr = [colorStr substringWithRange:range];
    //g
    range.location = 2;
    NSString *gStr = [colorStr substringWithRange:range];
    //b
    range.location = 4;
    NSString *bStr = [colorStr substringWithRange:range];
    
    //转换值
    unsigned int r, g, b;
    [[NSScanner scannerWithString:rStr] scanHexInt:&r];
    [[NSScanner scannerWithString:gStr] scanHexInt:&g];
    [[NSScanner scannerWithString:bStr] scanHexInt:&b];
    
    return [UIColor colorWithRed:(r/255.0f) green:(g/255.0f) blue:(b/255.0f) alpha:alpha];
}

@end
