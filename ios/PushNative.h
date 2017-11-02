//
//  PushNative.h
//  RNDemo
//
//  Created by Nino on 2017/9/11.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <Foundation/Foundation.h>
// 导入RCTBridgeModule类，这个是react-native提供
#import <React/RCTBridgeModule.h>
// 遵守RCTBridgeModul协议
@interface PushNative : NSObject <RCTBridgeModule>

@end
