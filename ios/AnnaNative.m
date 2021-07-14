#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AnnaNative, NSObject)

RCT_EXTERN_METHOD(showToast:(NSString *)text duration:(NSTimeInterval)duration)

RCT_EXTERN_METHOD(showLoading:(NSString *)text)

RCT_EXTERN_METHOD(hideLoading)

@end
