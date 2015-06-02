'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

'use strict';

var DefaultDecorators = [{
  component: _React2['default'].createClass({
    displayName: 'component',

    render: function render() {
      return _React2['default'].createElement(
        'button',
        {
          style: this.getButtonStyles(this.props.currentSlide === 0),
          onClick: this.props.previousSlide },
        ''
      );
    },
    getButtonStyles: function getButtonStyles(disabled) {
      return {
        border: 0,
        padding: 10,
        outline: 0,
        opacity: disabled ? 0 : 1,
        cursor: disabled ? 'auto' : 'pointer'
      };
    }
  }),
  position: 'CenterLeft'
}, {
  component: _React2['default'].createClass({
    displayName: 'component',

    render: function render() {
      return _React2['default'].createElement(
        'button',
        {
          style: this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount),
          onClick: this.props.nextSlide },
        ''
      );
    },
    getButtonStyles: function getButtonStyles(disabled) {
      return {
        border: 0,
        padding: 10,
        outline: 0,
        opacity: disabled ? 0 : 1,
        cursor: disabled ? 'auto' : 'pointer'
      };
    }
  }),
  position: 'CenterRight'
}, {
  component: _React2['default'].createClass({
    displayName: 'component',

    render: function render() {
      var self = this;
      var primaryColor = self.props.primaryColor
      var secondaryColor = self.props.secondaryColor
      var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
      return _React2['default'].createElement(
        'ul',
        { style: self.getListStyles() },
        indexes.map(function (index) {
          return _React2['default'].createElement(
            'li',
            { style: self.getListItemStyles(), key: index },
            _React2['default'].createElement(
              'button',
              {
                style: self.getButtonStyles(self.props.currentSlide === index, primaryColor, secondaryColor),
                onClick: self.props.goToSlide.bind(null, index) },
              '•'
            )
          );
        })
      );
    },
    getIndexes: function getIndexes(count, inc) {
      var arr = [];
      for (var i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    },
    getListStyles: function getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        top: -10,
        padding: 0
      };
    },
    getListItemStyles: function getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block'
      };
    },
    getButtonStyles: function getButtonStyles(active, primaryColor, secondaryColor) {
      return {
        border: 0,
        color: active ? primaryColor : secondaryColor,
        cursor: 'pointer',
        padding: 10,
        outline: 0,
        fontSize: 24,
      };
    }
  }),
  position: 'BottomCenter'
}];

exports['default'] = DefaultDecorators;
module.exports = exports['default'];
