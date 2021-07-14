//
//  Toast.swift
//  Toast
//
//  Created by 陈嘉文 on 2021/7/12.
//

import UIKit

public class ToastDuration: NSObject {
  @available(*, unavailable) private override init() {}
  // `short` and `long` (lowercase) are reserved words in Objective-C
  // so we capitalize them instead of the default `short_` and `long_`
  @objc public static let fade: TimeInterval = 0.24
  @objc(Short) public static let short: TimeInterval = 2.0
  @objc(Long) public static let long: TimeInterval = 3.5
}

class Toast: NSObject {
  
  static var loading: Toast = {
    let icon = UIActivityIndicatorView();
    icon.style = UIActivityIndicatorView.Style.whiteLarge;
    icon.startAnimating();
    let toast = Toast(text: "加载中...", icon: icon);
    return toast;
  }()
  
  static public func show(text: String, duration: TimeInterval = ToastDuration.short) {
    let toast = Toast(text: text, duration: duration);
    toast.show();
  }
  
  static public func showLoading() {
    loading.showLoading();
  }
  
  static public func showLoading(text: String) {
    loading.toastView.text = text;
    loading.showLoading();
  }
  
  static public func hideLoading() {
    loading.hideLoading();
  }
  
  var toastView: ToastView = ToastView();
  
  var duration: TimeInterval;
  
  public init(text: String, duration: TimeInterval = ToastDuration.short) {
    self.toastView.text = text;
    self.duration = duration;
    super.init();
  }
  
  public init(text: String, icon: UIView, duration: TimeInterval = ToastDuration.short) {
    self.toastView.text = text;
    self.toastView.icon = icon;
    self.duration = duration;
    super.init();
  }
  
  public func show() {
    let ScreenCenterY = ScreenHeight / 2;
    UIApplication.shared.windows.first?.addSubview(toastView);
    UIView.animate(withDuration: ToastDuration.fade) {
      self.toastView.center.y = ScreenCenterY - 10;
    } completion: { finished in
      UIView.animate(withDuration: ToastDuration.fade) {
        self.toastView.center.y = ScreenCenterY;
      } completion: { finished in
        Timer.scheduledTimer(withTimeInterval: self.duration, repeats: false) { timer in
          UIView.animate(withDuration: ToastDuration.fade) {
            self.toastView.alpha = 0;
          } completion: { finished in
            self.toastView.removeFromSuperview();
            timer.invalidate();
          }
        }
      }
    }
  }
  
  public func showLoading() {
    let ScreenCenterY = ScreenHeight / 2;
    self.toastView.center.y = ScreenCenterY - 10;
    self.toastView.alpha = 0;
    UIApplication.shared.windows.first?.addSubview(toastView);
    
    UIView.animate(withDuration: ToastDuration.fade) {
      self.toastView.alpha = 1;
    }
  }
  
  public func hideLoading() {
    UIView.animate(withDuration: ToastDuration.fade) {
      self.toastView.alpha = 0;
    } completion: { finished in
      self.toastView.removeFromSuperview();
    }
  }
  
}
