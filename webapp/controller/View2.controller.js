sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.project1.controller.View2", {
        onInit() {
        },
        onNavigateView1:function()
        {
            this.getOwnerComponent().getTargets().display("View1");
        }
    });
});