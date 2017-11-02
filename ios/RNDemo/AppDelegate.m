/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "TestController.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RNDemo"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  //关键代码
  _nav=[[UINavigationController alloc]initWithRootViewController:rootViewController];
  _nav.navigationBarHidden = YES;
  
  self.window.rootViewController = _nav;
  
   [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(doNotification:) name:@"RNOpenVC" object:nil];
  
  
  [self.window makeKeyAndVisible];
  return YES;
}

-(void)doNotification:(NSNotification *)notification
{
  NSLog(@"成功收到===>通知");
  //将通知里面的userInfo取出来，使用
  TestController *testVC = [[TestController alloc]init];
  
  [self.nav pushViewController:testVC animated:YES];
  //注意不能在这里移除通知否则push进去后有pop失效
  
}

@end
