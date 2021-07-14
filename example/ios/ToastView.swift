//
//  ToastView.swift
//  AnnaNativeExample
//
//  Created by 陈嘉文 on 2021/7/12.
//

import UIKit

let ScreenWidth: CGFloat = UIScreen.main.bounds.width;
let ScreenHeight: CGFloat = UIScreen.main.bounds.height;

open class ToastView: UIView {
  
  @objc open dynamic var textInsets = UIEdgeInsets(top: 6, left: 10, bottom: 6, right: 10)
  
  var textLabel: UILabel = {
    let `self` = UILabel();
    self.textColor = .white;
    self.backgroundColor = .clear;
    self.textAlignment = .center;
    self.font = UIFont.systemFont(ofSize: 14);
    return self;
  }();
  
  var text: String? {
    get {
      return self.textLabel.text;
    }
    set {
      self.textLabel.text = newValue;
      updateFrame();
    }
  };
  
  var icon: UIView? {
    didSet {
      if let tmp = icon {
        self.addSubview(tmp);
        updateFrame();
      }
    }
  };
  
  func initData(text: String, icon: UIView?) {
    self.isUserInteractionEnabled = false;
    self.backgroundColor = UIColor.init(hexString: "#111111");
    self.layer.cornerRadius = 3;
    self.text = text;
    self.addSubview(self.textLabel);
    
    self.icon = icon;
  }
  
  public init() {
    super.init(frame: .zero);
    initData(text: "", icon: nil);
  }
  
  public init(text: String) {
    super.init(frame: .zero);
    initData(text: text, icon: nil);
  }
  
  public init(text: String, icon: UIView) {
    super.init(frame: .zero);
    initData(text: text, icon: icon);
  }
  
  required public init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  open override func layoutSubviews() {
    super.layoutSubviews();
  }
  
  func updateFrame() {
    let textLabelSize = textLabel.sizeThatFits(CGSize(width: ScreenWidth - 60, height: 200));
    let selfWidth = textLabelSize.width + textInsets.left + textInsets.right;
    let selfHeight = textLabelSize.height + textInsets.top + textInsets.bottom;
    let iconHeight: CGFloat = 80;
    
    if let tmp = self.icon {
      
      let width = textLabelSize.width > iconHeight ? textLabelSize.width : iconHeight;
        
      tmp.frame = CGRect(
        x: textInsets.left,
        y: textInsets.top,
        width: width,
        height: iconHeight
      )
      
      textLabel.frame = CGRect(
        x: textInsets.left,
        y: textInsets.top + iconHeight,
        width: width,
        height: textLabelSize.height
      )
      
      self.frame = CGRect(
        x: (ScreenWidth - selfWidth) / 2,
        y: ScreenHeight - 40,
        width: width + textInsets.left + textInsets.right,
        height: textInsets.top + iconHeight + textLabelSize.height + textInsets.bottom
      )
    } else {
      textLabel.frame = CGRect(
        x: textInsets.left,
        y: textInsets.top,
        width: textLabelSize.width,
        height: textLabelSize.height
      )
      
      self.frame = CGRect(
        x: (ScreenWidth - selfWidth) / 2,
        y: ScreenHeight - 40,
        width: selfWidth,
        height: selfHeight
      )
    }
    
  }
  
}
