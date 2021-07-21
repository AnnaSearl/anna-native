//
//  OCViewController.m
//  AnnaNativeExample
//
//  Created by 陈嘉文 on 2021/7/20.
//

#import "OCViewController.h"

@import AnnaNative;

@interface OCViewController ()

@end

@implementation OCViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  
  UIButton *btn = [[UIButton alloc] initWithFrame:CGRectMake(150, 300, 100, 50)];
  [btn setTitle:@"哈哈哈哈哈哈哈" forState:UIControlStateNormal];
  [btn addTarget:self action:@selector(onClick) forControlEvents:UIControlEventTouchUpInside];
  
  [self.view addSubview:btn];
}

- (void)onClick {
  AnnaNative *anna = [AnnaNative new];
  [anna showLoading:@"hhhhh"];
}

@end
