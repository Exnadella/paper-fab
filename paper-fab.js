import '../polymer/polymer.js';
import '../iron-flex-layout/iron-flex-layout.js';
import '../iron-icon/iron-icon.js';
import { PaperButtonBehavior } from '../paper-behaviors/paper-button-behavior.js';
import '../paper-styles/element-styles/paper-material-styles.js';
import '../paper-styles/color.js';
import '../paper-styles/default-theme.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="paper-fab">
  <template strip-whitespace="">
    <style include="paper-material-styles">
      :host {
        @apply --layout-vertical;
        @apply --layout-center-center;

        background: var(--paper-fab-background, var(--accent-color));
        border-radius: 50%;
        box-sizing: border-box;
        color: var(--text-primary-color);
        cursor: pointer;
        height: 56px;
        min-width: 0;
        outline: none;
        padding: 16px;
        position: relative;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        width: 56px;
        z-index: 0;

        /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        @apply --paper-fab;
      }

      [hidden] {
        display: none !important;
      }

      :host([mini]) {
        width: 40px;
        height: 40px;
        padding: 8px;

        @apply --paper-fab-mini;
      }

      :host([disabled]) {
        color: var(--paper-fab-disabled-text, var(--paper-grey-500));
        background: var(--paper-fab-disabled-background, var(--paper-grey-300));

        @apply --paper-fab-disabled;
      }

      iron-icon {
        @apply --paper-fab-iron-icon;
      }

      span {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;

        @apply --paper-fab-label;
      }

      :host(.keyboard-focus) {
        background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
    <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
  </template>

  
</dom-module>`;

document.head.appendChild($_documentContainer);
Polymer({
  is: 'paper-fab',

  behaviors: [
    PaperButtonBehavior
  ],

  properties: {
    /**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */
    src: {
      type: String,
      value: ''
    },

    /**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */
    icon: {
      type: String,
      value: ''
    },

    /**
     * Set this to true to style this is a "mini" FAB.
     */
    mini: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * The label displayed in the badge. The label is centered, and ideally
     * should have very few characters.
     */
    label: {
      type: String,
      observer: '_labelChanged'
    }
  },

  _labelChanged: function() {
    this.setAttribute('aria-label', this.label);
  },

  _computeIsIconFab: function(icon, src) {
    return (icon.length > 0) || (src.length > 0);
  }
});
