sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.project1.controller.View1", {
        onInit() {
        },
        onNavigateView2:function()
        {

            	this.getOwnerComponent().getTargets().display("View2");
        }
    });
});