sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel'
], function (UIComponent, JSONModel) {
    'use strict';
    return UIComponent.extend('sap.app.Component', {
        metadata: {
            manifest: 'json'
        }, 
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            
            let oData = this.getModel('invoice');
            console.log(oData);
            oData.read("/Employees", {
                success: function (response) {
                    // response = Object.assign({}, response['results']);
                    // oData = {employee: response}
                },
                error: function (oError) {

                }
            })

            // this.setModel(oData, 'employees');
            // console.log(this.getModel('employees'));
        }
    });
});