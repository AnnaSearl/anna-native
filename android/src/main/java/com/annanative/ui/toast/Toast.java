package com.annanative.ui.toast;

import android.app.ProgressDialog;
import android.content.Context;
import android.graphics.Color;
import android.view.Gravity;
import android.view.View;

public class Toast {
	static ProgressDialog progressDialog;

	public static void show(Context context, String text) {
//        View view = toast.getView();
//        view.setBackgroundColor(Color.parseColor("#111111"));
//        toast.setView(view);
		android.widget.Toast toast = android.widget.Toast.makeText(context, text, android.widget.Toast.LENGTH_SHORT);
		toast.setGravity(Gravity.CENTER, 0, 0);
		toast.show();
	}

	public static void show(Context context, String text, int duration) {
		android.widget.Toast toast = android.widget.Toast.makeText(context, text, duration);
		toast.setGravity(Gravity.CENTER, 0, 0);
		toast.show();
	}

	public static void showLoading(Context context) {
		if (progressDialog == null) {
			progressDialog = new ProgressDialog(context);
		}
		progressDialog.setMessage("加载中...");
		progressDialog.setIndeterminate(true);// 是否形成一个加载动画  true表示不明确加载进度形成转圈动画  false 表示明确加载进度
		progressDialog.setCancelable(false);//点击返回键或者dialog四周是否关闭dialog  true表示可以关闭 false表示不可关闭
		progressDialog.show();
	}

	public static void showLoading(Context context, String text) {
		if (progressDialog == null) {
			progressDialog = new ProgressDialog(context);
		}
		progressDialog.setMessage(text);
		progressDialog.setIndeterminate(true);// 是否形成一个加载动画  true表示不明确加载进度形成转圈动画  false 表示明确加载进度
		progressDialog.setCancelable(false);//点击返回键或者dialog四周是否关闭dialog  true表示可以关闭 false表示不可关闭
		progressDialog.show();
	}

	public static void hideLoading() {
		progressDialog.hide();
	}
}
