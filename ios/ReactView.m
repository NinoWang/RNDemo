//
//  ReactView.m
//  RNDemo
//
//  Created by Nino on 2017/9/11.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ReactView.h"
#import <React/RCTRootView.h>

@implementation ReactView

- (instancetype)initWithFrame:(CGRect)frame {
  if (self = [super initWithFrame:frame]) {
    NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    // 这里的moduleName一定要和下面的index.ios.js里面的注册一样
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"RNDemo"
                                                  initialProperties:nil
                                                      launchOptions:nil];
    [self addSubview:rootView];
    
    rootView.frame = self.bounds;
  }

  
  return self;
}

@end
