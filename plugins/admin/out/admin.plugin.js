// Generated by CoffeeScript 1.3.3

/*
This plugin is still in beta, don't use it.
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = function(BasePlugin) {
    var AdminPlugin;
    return AdminPlugin = (function(_super) {

      __extends(AdminPlugin, _super);

      function AdminPlugin() {
        return AdminPlugin.__super__.constructor.apply(this, arguments);
      }

      AdminPlugin.prototype.name = 'admin';

      AdminPlugin.prototype.renderBefore = function(_arg, next) {
        var templateData;
        templateData = _arg.templateData;
        templateData.blocks.scripts.push('<script src="/_docpad/plugins/admin/scripts/script.js"></script>');
        return next();
      };

      AdminPlugin.prototype.writeAfter = function(_arg, next) {
        var docpad;
        _arg;
        return docpad = require(this.docpad.mainPath).createInstance({
          checkVersion: false,
          growl: false,
          rootPath: __dirname,
          outPath: "" + this.docpad.config.outPath + "/_docpad/plugins/admin",
          logLevel: 0,
          enableUnlistedPlugins: false,
          enabledPlugins: 'coffee'
        }).action('generate', next);
      };

      return AdminPlugin;

    })(BasePlugin);
  };

}).call(this);
