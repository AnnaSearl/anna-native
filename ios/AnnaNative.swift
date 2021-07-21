@objc(AnnaNative)
public class AnnaNative: NSObject {
    
    @objc(showToast:duration:)
    public func showToast(_ text: String, duration: TimeInterval) -> Void {
        DispatchQueue.main.async {
            Toast.show(text: text, duration: duration);
        }
    }
    
    @objc(showLoading:)
    public func showLoading(_ text: String) -> Void {
        DispatchQueue.main.async {
            Toast.showLoading(text: text);
        }
    }
    
    @objc(hideLoading)
    public func hideLoading() -> Void {
        DispatchQueue.main.async {
            Toast.hideLoading();
        }
    }
}
