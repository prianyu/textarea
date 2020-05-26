// components/multiInput/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['textarea-class', 'wrap-class', 'placeholder-class'],
  properties: {
    value: String, 
    disabled: Boolean,
    maxlength: {
      type: Number,
      value: -1
    },
    "auto-focus": Boolean,
    focus: Boolean,
    "auto-height": Boolean,
    fixed: Boolean,
    "placeholder-style": String,
    "textarea-style": String,
    "virtual-textarea-style": String,
    placeholder: String,
    "cursor-spacing": {
      type: Number,
      value: 0
    },
    cursor: {
      type: Number,
      value: -1
    },
    "show-confirm-bar": {
      type: Boolean, 
      value: true
    },
    "show-confirm-bar": {
      type: Number,
      value: -1
    },
    "selection-end": {
      type: Number,
      value: -1
    },
    "adjust-position": {
      type: Boolean,
      value: true
    },
    "hold-keyboard": Boolean,

  },

  /**
   * 组件的初始数据
   */
  data: {
    showTextArea: false,
    autoFocus: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInput(e) {
      this.setData({
        value: e.detail.value
      })
      this.triggerEvent("input", e.detail)
    },
    handleTap() {
      this.setData({
        showTextArea: true,
        autoFocus: true
      })
    },
    handleBlur(e) {
      this.setData({
        showTextArea: false
      })
      this.triggerEvent("blur", e.detail)
    },
    handleFocus(e) {
      this.triggerEvent("focus", e.detail)
    },
    bindkeyboardheightchange(e) {
      this.triggerEvent("bindkeyboardheightchange", e.detail)
    }
  }
})
