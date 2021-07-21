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

open class Toast: NSObject {
    
    // toast 静态全局单例
    // static var toast: Toast?;
    static var toast: Toast = Toast();
    
    // loading 静态全局单例
    static var loading: Toast = {
        let icon = UIActivityIndicatorView();
        icon.style = UIActivityIndicatorView.Style.whiteLarge;
        icon.startAnimating();
        let toast = Toast(text: "加载中...", icon: icon);
        return toast;
    }()
    
    @objc static public func show(text: String) {
        // 先隐藏前一个
        toast.hide();
        toast.toastView.text = text;
        toast.show();
    }
    
    @objc static public func show(text: String, duration: TimeInterval = ToastDuration.short) {
        // 先隐藏前一个
        toast.hide();
        toast.toastView.text = text;
        toast.duration = duration;
        toast.show();
    }
    
    @objc static public func hide() {
        toast.hide();
    }
    
    @objc static public func showLoading() {
        loading.showLoading(isModal: true);
    }
    
    @objc static public func showLoading(text: String) {
        loading.toastView.text = text;
        loading.showLoading(isModal: true);
    }
    
    @objc static public func hideLoading() {
        loading.hideLoading();
    }
    
    var toastView: ToastView = ToastView();
    var modal: ToastMask = ToastMask();
    
    var duration: TimeInterval;
    var toastTimer: Timer?;
    
    public init(duration: TimeInterval = ToastDuration.short) {
        self.duration = duration;
        super.init();
    }
    
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
    
    public func show(isModal: Bool = false) {
        let ScreenCenterY = ScreenHeight / 2;
        
        if (isModal == true) {
            modal.addSubview(toastView);
            UIApplication.shared.windows.first?.addSubview(modal);
        } else {
            UIApplication.shared.windows.first?.addSubview(toastView);
        }
        
        // 这个一定要加，否则在快速连续点击时会出现 Toast 不显示的现象
        self.toastView.alpha = 1;
        // 设置刚出现时的位置
        self.toastView.center.y = ScreenCenterY + 100;
        
        UIView.animate(withDuration: ToastDuration.fade) {
            self.toastView.center.y = ScreenCenterY - 10;
        } completion: { finished in
            UIView.animate(withDuration: ToastDuration.fade) {
                self.toastView.center.y = ScreenCenterY;
            } completion: { finished in
                self.toastTimer = Timer.scheduledTimer(withTimeInterval: self.duration, repeats: false) { timer in
                    UIView.animate(withDuration: ToastDuration.fade) {
                        self.toastView.alpha = 0;
                    } completion: { finished in
                        self.hide();
                    }
                }
            }
        }
    }
    
    public func hide() {
        self.modal.removeFromSuperview();
        self.toastView.removeFromSuperview();
        self.toastTimer?.invalidate();
    }
    
    public func showLoading(isModal: Bool = false) {
        let ScreenCenterY = ScreenHeight / 2;
        self.toastView.center.x = ScreenWidth / 2; // 不加这行不会水平居中对齐
        self.toastView.center.y = ScreenCenterY - 10;
        self.toastView.alpha = 0;
        
        if (isModal == true) {
            modal.addSubview(toastView);
//            modal.backgroundColor = UIColor.init(white: 0, alpha: 0.7);
            UIApplication.shared.windows.first?.addSubview(modal);
        } else {
            UIApplication.shared.windows.first?.addSubview(toastView);
        }
        
        UIView.animate(withDuration: ToastDuration.fade) {
            self.toastView.alpha = 1;
        }
    }
    
    public func hideLoading() {
        UIView.animate(withDuration: ToastDuration.fade) {
            self.toastView.alpha = 0;
        } completion: { finished in
            self.modal.removeFromSuperview();
            self.toastView.removeFromSuperview();
        }
    }
    
}
