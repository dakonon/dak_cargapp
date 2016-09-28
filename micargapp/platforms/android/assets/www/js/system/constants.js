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
    self.activos = {};
    self.finalizadas = {};
    self.ofertar = {};
    self.chat.sendMsjs = {};
    self.contrato = {};
    self.geo = {};
    self.notificaciones = {};
    self.pay = {};
    self.vehicles = {};
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

    self.company.invitacion = function () {
        var url = URL_BASE + 'friendship/friend';
        return url;
    };

    self.company.getItems = function () {
        var url = URL_BASE + 'company/list?access-token=';
        return url;
    };

    self.company.friend = function () {
        var url = URL_BASE + 'company/friend?access-token=';
        return url;
    };

    self.company.see = function () {
        var url = URL_BASE + 'company/see';
        return url;
    };

    self.company.sendsolicitude = function () {
        var url = URL_BASE + 'friendship/sendsolicitude';
        return url;
    };

    self.company.aceptsolicitude = function () {
        var url = URL_BASE + 'friendship/aceptsolicitude';
        return url;
    };

    self.company.deletesolicitude = function () {
        var url = URL_BASE + 'friendship/deletesolicitude';
        return url;
    };

    self.perfil.edit = function () {
        var url = URL_BASE + 'profile/seeprofile?access-token=';
        return url;
    };

     self.perfil.update = function () {
        var url = URL_BASE + 'profile/update?access-token=';
        return url;
    };

    self.noticias.getItems = function () {
        var url = URL_BASE + 'news/list?access-token=';
        return url;
    };


    self.cotizar.getItems1 = function () {
        var url = URL_BASE + 'cotizar/seecotization?access-token=';
        return url;
    };

     self.cotizar.getItems2 = function () {
        var url = URL_BASE + 'cotizar/seeloadasigned?access-token=';
        return url;
    };

    self.cotizar.aceptar1 = function () {
        var url = URL_BASE + 'cotizar/acepttproposal';
        return url;
    };

    self.cotizar.aceptar2 = function () {
        var url = URL_BASE + 'cotizar/aceptutproposal';
        return url;
    };

    self.cotizar.aceptar3 = function () {
        var url = URL_BASE + 'cotizar/sendcotization';
        return url;
    };

    self.activos.getItems = function () {
        var url = URL_BASE + 'cotizar/loadcontracts?status=1&access-token=';
        return url;
    };

      self.finalizadas.getItems = function () {
        var url = URL_BASE + 'cotizar/loadcontracts?status=3&access-token=';
        return url;
    };

    self.ofertar.tload = function () {
        var url = URL_BASE + 'cotizar/acepttproposal?access-token=';
        return url;
    };

    self.chat.getMsjs = function () {
        var url = URL_BASE + 'chat/getchattrans?access-token=';
        return url;
    };
    self.chat.sendMsjs = function () {
        var url = URL_BASE + 'chat/postmsjtrans?access-token=';
        return url;
    };
    
    self.ofertar.uload = function () {
        var url = URL_BASE + 'cotizar/aceptutproposal?access-token=';
        return url;
    };

     self.ofertar.send = function () {
        var url = URL_BASE + 'cotizar/sendcotization?access-token=';
        return url;
    };

      self.contrato.send = function () {
        var url = URL_BASE + 'cotizar/transporterpayment';
        return url;
    };

       self.geo.send = function () {
        var url = URL_BASE + 'load/reportlocation?access-token=';
        return url;
    };

        self.contrato.destino = function () {
        var url = URL_BASE + 'load/reportloadstatus?access-token=';
        return url;
    };

    self.contrato.finalizar = function () {
        var url = URL_BASE + 'load/reportloadend?access-token=';
        return url;
    };

    self.notificaciones.get = function () {
        var url = URL_BASE + 'notificaciones/getnots';
        return url;
    };

    self.notificaciones.read = function () {
        var url = URL_BASE + 'notificaciones/readnots';
        return url;
    };

    self.notificaciones.cotization = function () {
        var url = URL_BASE + 'notificaciones/cotization';
        return url;
    };

    self.pay.transporte = function () {
        var url = URL_BASE + 'cotizar/transporterpayment';
        return url;
    };

    self.vehicles.get = function () {
        var url = URL_BASE + 'account/vehicles';
        return url;
    };
}

})()



