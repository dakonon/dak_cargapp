(function () {
    'use strict';
angular.module('app.Services')
.service('constants', constantsService);

function constantsService() {
    var self = this;
    var URL_BASE='http://micargapp.com/rest/v1/';
    self.login = {};
  	self.recover = {};
  	self.register = {};
  	self.invitacion = {};
  	self.company = {};
  	self.perfil = {};
  	self.noticias = {};
    self.cotizar = {};
    self.chat = {};
    /* URL to Login */

    self.login.getToken = function () {
        var url = URL_BASE + 'user/login';
        return url;
    };

    self.recover.recover = function () {
        var url = URL_BASE + 'account/recover';
        return url;
    };
    
    self.register.register = function () {
        var url = URL_BASE + 'account/create';
        return url;
    };

    self.invitacion.getInvitacion = function () {
        var url = URL_BASE + 'account/friendship/friend?access-token=';
        return url;
    };

    self.company.getItems = function () {
        var url = URL_BASE + 'company/list?access-token=';
        return url;
    };

    self.perfil.edit = function () {
        var url = URL_BASE + 'update/update?access-token=';
        return url;
    };

    self.noticias.getItems = function () {
        var url = URL_BASE + 'news/list?access-token=';
        return url;
    };


    self.cotizar.getItems = function () {
        var url = URL_BASE + 'cotizar/cotizar?access-token=';
        return url;
    };

    self.chat.getMsjs = function () {
        var url = URL_BASE + 'chat/getchattrans?access-token=';
        return url;
    };
}

})()



