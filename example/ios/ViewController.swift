//
//  ViewController.swift
//  SwiftTest
//
//  Created by 陈嘉文 on 2021/7/12.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
      
      let btn = UIButton.init(frame: CGRect(x: 100,y: 100,width: 100,height: 40));
      btn.setTitle("点击我显示loading", for: UIControl.State.normal);
      btn.addTarget(self, action: #selector(self.showToast), for: UIControl.Event.touchUpInside);
      
      let btn1 = UIButton.init(frame: CGRect(x: 250,y: 100,width: 100,height: 40));
      btn1.setTitle("点击我隐藏loading", for: UIControl.State.normal);
      btn1.addTarget(self, action: #selector(self.hideToast), for: UIControl.Event.touchUpInside);
      
      let btn2 = UIButton.init(frame: CGRect(x: 300,y: 200,width: 100,height: 40));
      btn2.setTitle("点击我", for: UIControl.State.normal);
      btn2.addTarget(self, action: #selector(self.showTest), for: UIControl.Event.touchUpInside);
      
      self.view.addSubview(btn);
      self.view.addSubview(btn1);
      self.view.addSubview(btn2);
    }
  
    @objc func showToast() {
      Toast.showLoading();
    }
  
    @objc func hideToast() {
      Toast.hideLoading();
    }

    @objc func showTest() {
      Toast.show(text: "就哈电动机公公");
    }
}


