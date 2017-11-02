//
//  TestController.m
//  RNDemo
//
//  Created by Nino on 2017/9/11.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestController.h"
#import "ReactView.h"
#import <React/RCTRootView.h>

@interface TestController ()

@end

@implementation TestController

- (void)viewDidLoad {
    [super viewDidLoad];
  
  self.navigationItem.title = @"原生页面";
  
  self.view.backgroundColor = [UIColor whiteColor];

  
  UIButton *backBtn = [UIButton buttonWithType:UIButtonTypeSystem];
  backBtn.frame = CGRectMake(275/2, 64 + 40, 100, 40);
  [backBtn setTitle:@"返回至RN页面" forState:UIControlStateNormal];
  [backBtn setBackgroundColor:[UIColor blueColor]];
  [backBtn addTarget:self action:@selector(back) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:backBtn];
  
  UIButton *goToRNBtn = [UIButton buttonWithType:UIButtonTypeSystem];
  goToRNBtn.frame = CGRectMake(275/2, 64 + 100, 100, 40);
  [goToRNBtn setTitle:@"跳转至RN页面" forState:UIControlStateNormal];
  [backBtn setBackgroundColor:[UIColor cyanColor]];
  [goToRNBtn addTarget:self action:@selector(goToRN) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:goToRNBtn];
  
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(receiveNotification:)
                                               name:@"RNOpenVC"
                                             object:nil];
            
  
}

- (void)receiveNotification:(NSNotification *)noti {
  NSLog(@"%@", noti.userInfo[@"id"]);
}

- (void)dealloc {
   [[NSNotificationCenter defaultCenter] removeObserver:self];
}

-(void)viewWillAppear:(BOOL)animated  {
  [super viewWillAppear:animated];
  self.navigationController.navigationBarHidden = NO;
}

-(void)viewWillDisappear:(BOOL)animated {
  [super viewWillDisappear:animated];
  self.navigationController.navigationBarHidden = YES;
}

-(void)back {
  [self.navigationController popViewControllerAnimated:YES];
}

-(void)goToRN {
  
  NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
  NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
  
  RCTBridge *bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation moduleProvider:nil launchOptions:nil];
  
  NSDictionary *props = @{@"tag" : @"原生"};
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"RNDetail"
                                            initialProperties:props];
  
  self.view = rootView;
  
  
  
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
