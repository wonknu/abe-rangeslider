'use strict';

var hooks = {
  afterEditorInput: function (htmlString, params, abe) {
    if(params.sliderrand != null) {
      var match = [0, '50', '50']
      if(/left:(.*?)%;top:(.*?)%/.test(params.value)) match = params.value.match(/left:(.*?)%;top:(.*?)%/);
      htmlString = htmlString.replace(
        '<div class="input-group">',
        '<div class="daddy-slider" data-x="' + match[1] + '%" data-y="' + match[2] + '%">' +
          'Position x :<br><div class="range-slider" data-coor="x"></div>' +
          'Position y :<br><div class="range-slider" data-coor="y"></div>' +
        '</div>' +
        '<div class="input-group input-group-slider">'
      );
    }

    return htmlString
  }
};

exports.default = hooks;
