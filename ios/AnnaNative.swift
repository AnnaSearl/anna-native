@objc(AnnaNative)
class AnnaNative: NSObject {
    
    @objc(showToast:duration:)
    func showToast(_ text: String, duration: TimeInterval) -> Void {
        DispatchQueue.main.async {
            Toast.show(text: text, duration: duration);
        }
    }
    
    @objc(showLoading:)
    func showLoading(_ text: String) -> Void {
        DispatchQueue.main.async {
            Toast.showLoading(text: text);
        }
    }
    
    @objc(hideLoading)
    func hideLoading() -> Void {
        DispatchQueue.main.async {
            Toast.hideLoading();
        }
    }
}
