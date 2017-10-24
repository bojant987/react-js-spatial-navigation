import React, { Component } from 'react';
import PropTypes from 'prop-types';

import JsSpatialNavigation from './lib/spatial_navigation.js';

export default class SpatialNavigation extends Component {
  componentWillMount() {
    JsSpatialNavigation.init();
    JsSpatialNavigation.add({
      selector: '.focusable'
    });
    JsSpatialNavigation.focus();
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
};

function getSectionSelectorFromId(id) {
  return 'section_' + id;
}

export class Focusable extends Component {
  componentFocused(e) {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  componentUnfocused(e) {
    if (this.props.onUnfocus) {
      this.props.onUnfocus(e);
    }
  }

  componentClickEnter(e) {
    if (this.props.onClickEnter) {
      this.props.onClickEnter(e);
    }
  }

  _componentFocused = (event) => this.componentFocused(event);
  _componentUnfocused = (event) => this.componentUnfocused(event);
  _componentClickEnter = (event) => this.componentClickEnter(event);

  componentDidMount() {
    if (!this.el)
      return;

    this.el.addEventListener("sn:focused", this._componentFocused);
    this.el.addEventListener("sn:unfocused", this._componentUnfocused);
    this.el.addEventListener("sn:enter-up", this._componentClickEnter);
  }

  componentWillUnmount() {
    this.el.removeEventListener("sn:focused", this._componentFocused);
    this.el.removeEventListener("sn:unfocused", this._componentUnfocused);
    this.el.removeEventListener("sn:enter-up", this._componentClickEnter);
  }

  render() {
    let classNames = [this.context.focusableSectionId ? getSectionSelectorFromId(this.context.focusableSectionId) : "focusable"];

    if (this.props.active) {
      classNames.push("active");
    }

    if (this.props.className) {
      classNames.push(this.props.className);
    }

    return (
      <div className={classNames.join(" ")} ref={e => this.el = e} tabIndex="-1">
        {this.props.children}
      </div>
    )
  }
}

Focusable.contextTypes = {
  focusableSectionId: PropTypes.number
};

let sectionsIds = 1;

export class FocusableSection extends Component {
  getChildContext() {
    return {focusableSectionId: this.sectionId};
  }

  componentWillMount() {
    this.sectionId = sectionsIds++;
  }

  _getSelector() {
    return '.' + getSectionSelectorFromId(this.sectionId);
  }

  componentDidMount() {
    let defaultElement = this.props.defaultElement;
    const enterTo = this.props.enterTo === undefined ? 'default-element' : this.props.enterTo;

    if (defaultElement && defaultElement === 'first') {
      defaultElement =  this._getSelector() + ':first-child';
    }

    if (defaultElement && defaultElement === 'active') {
      defaultElement =  this._getSelector() + '.active';
    }

    console.log(defaultElement, enterTo);

    JsSpatialNavigation.add({
      id: this.sectionId,
      selector: this._getSelector(),
      enterTo: enterTo,
      defaultElement: defaultElement
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};

FocusableSection.childContextTypes = {
  focusableSectionId: PropTypes.number
};
