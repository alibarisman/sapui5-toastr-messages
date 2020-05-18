sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/sap/ToastrMessage/thirdparty/toastr/Toastr"
], function (Controller, JSONModel, Toastr) {
	"use strict";

	return Controller.extend("com.sap.ToastrMessage.controller.View", {

		onInit: function () {

		},
		
		getToastModel: function(oEvent) {
			return this.getView().getModel("temp").getProperty("/toast");
		},

		onClickToastr1: function () {
			var toast = this.getToastModel();
			Toastr.success("Success Message", "Success", toast.config);
		},
		
		onClickToastr2: function () {
			var toast = this.getToastModel();
			Toastr.info("Info Message", "Information", toast.config);
		},
		
		onClickToastr3: function () {
			var toast = this.getToastModel();
			Toastr.warning("Warning Message", "Warning", toast.config);
		},
		
		onClickToastr4: function () {
			var toast = this.getToastModel();
			Toastr.error("Error Message", "Error", toast.config);
		}
		
	});
});