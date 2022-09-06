sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    'use strict';
    return Controller.extend('sap.app.controller.App', {
        addUser: function () {
            let roleSelect = this.getView().byId('roleSelect');
            console.log(roleSelect);
            
            
            let oData = this.getView().getModel('userModel')['oData'];
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel)
            
            console.log(this.getView().getModel('userModel'));
            
            
        }
    });
});