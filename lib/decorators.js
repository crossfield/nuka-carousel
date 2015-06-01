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
        background: 'transparent'
        padding: 10,
        outline: 0,
        opacity: disabled ? 0.3 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer'
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
        background: 'transparent',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0.3 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer'
      };
    }
  }),
  position: 'CenterRight'
}, {
  component: _React2['default'].createClass({
    displayName: 'component',

    render: function render() {
      var self = this;
      var colors = self.props.colors;
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
                style: self.getButtonStyles(self.props.currentSlide === index, colors),
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
    getButtonStyles: function getButtonStyles(active, colors = {}) {
      return {
        border: 0,
        background: 'transparent',
        color: active ? colors.primary : colors.secondary
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
