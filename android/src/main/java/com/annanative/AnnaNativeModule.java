package com.annanative;

import android.app.ProgressDialog;

import androidx.annotation.NonNull;

import com.annanative.ui.toast.Toast;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;


@ReactModule(name = AnnaNativeModule.NAME)
public class AnnaNativeModule extends ReactContextBaseJavaModule {
    public static final String NAME = "AnnaNative";

    private ProgressDialog progressDialog;

    public AnnaNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void showToast(String text, int duration) {
        Toast.show(getCurrentActivity(), text, duration);
    }

    @ReactMethod
    public void showLoading(String text) {
        Toast.showLoading(getCurrentActivity(), text);
    }

    @ReactMethod
    public void hideLoading() {
        Toast.hideLoading();
    }

}
