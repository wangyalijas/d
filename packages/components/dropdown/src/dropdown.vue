<script>
  import Clickoutside from '../../../utils/clickoutside';
  import Emitter from '../../../mixins/emitter';
  import Migrating from '../../../mixins/migrating';
  import WButton from '../../button';
  import WButtonGroup from '../../button-group';
  import { generateId } from '../../../utils/util';

  export default {
    name: 'WDropdown',

    componentName: 'WDropdown',

    mixins: [Emitter, Migrating],

    directives: { Clickoutside },

    components: {
      WButton,
      WButtonGroup
    },

    provide() {
      return {
        dropdown: this
      };
    },

    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      type: String,
      size: {
        type: String,
        default: ''
      },
      splitButton: Boolean,
      hideOnClick: {
        type: Boolean,
        default: true
      },
      placement: {
        type: String,
        default: 'bottom-end'
      },
      visibleArrow: {
        default: true
      },
      showTimeout: {
        type: Number,
        default: 250
      },
      hideTimeout: {
        type: Number,
        default: 150
      }
    },

    data() {
      return {
        timeout: null,
        visible: false,
        triggerWm: null,
        menuItems: null,
        menuItemsArray: null,
        dropdownWm: null,
        focusing: false,
        listId: `dropdown-menu-${generateId()}`
      };
    },

    computed: {
      dropdownSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },

    mounted() {
      this.$on('menu-item-click', this.handleMenuItemClick);
      this.initEvent();
      this.initAria();
    },

    watch: {
      visible(val) {
        this.broadcast('WDropdownMenu', 'visible', val);
        this.$emit('visible-change', val);
      },
      focusing(val) {
        const selfDefine = this.$el.querySelector('.w-dropdown-selfdefine');
        if (selfDefine) { // 自定义
          if (val) {
            selfDefine.className += ' focusing';
          } else {
            selfDefine.className = selfDefine.className.replace('focusing', '');
          }
        }
      }
    },

    methods: {
      getMigratingConfig() {
        return {
          props: {
            'menu-align': 'menu-align is renamed to placement.'
          }
        };
      },
      show() {
        if (this.triggerWm.disabled) return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.trigger === 'click' ? 0 : this.showTimeout);
      },
      hide() {
        if (this.triggerWm.disabled) return;
        this.removeTabindex();
        this.resetTabindex(this.triggerWm);
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, this.trigger === 'click' ? 0 : this.hideTimeout);
      },
      handleClick() {
        if (this.triggerWm.disabled) return;
        if (this.visible) {
          this.hide();
        } else {
          this.show();
        }
      },
      handleTriggerKeyDown(ev) {
        const keyCode = ev.keyCode;
        if ([38, 40].indexOf(keyCode) > -1) { // up/down
          this.removeTabindex();
          this.resetTabindex(this.menuItems[0]);
          this.menuItems[0].focus();
          ev.preventDefault();
          ev.stopPropagation();
        } else if (keyCode === 13) { // space enter选中
          this.handleClick();
        } else if ([9, 27].indexOf(keyCode) > -1) { // tab || esc
          this.hide();
        }
        return;
      },
      handleItemKeyDown(ev) {
        const keyCode = ev.keyCode;
        const target = ev.target;
        const currentIndex = this.menuItemsArray.indexOf(target);
        const max = this.menuItemsArray.length - 1;
        let nextIndex;
        if ([38, 40].indexOf(keyCode) > -1) { // up/down
          if (keyCode === 38) { // up
            nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
          } else { // down
            nextIndex = currentIndex < max ? currentIndex + 1 : max;
          }
          this.removeTabindex();
          this.resetTabindex(this.menuItems[nextIndex]);
          this.menuItems[nextIndex].focus();
          ev.preventDefault();
          ev.stopPropagation();
        } else if (keyCode === 13) { // enter选中
          this.triggerWm.focus();
          target.click();
          if (this.hideOnClick) { // click关闭
            this.visible = false;
          }
        } else if ([9, 27].indexOf(keyCode) > -1) { // tab // esc
          this.hide();
          this.triggerWm.focus();
        }
        return;
      },
      resetTabindex(ele) { // 下次tab时组件聚焦元素
        this.removeTabindex();
        ele.setAttribute('tabindex', '0'); // 下次期望的聚焦元素
      },
      removeTabindex() {
        this.triggerWm.setAttribute('tabindex', '-1');
        this.menuItemsArray.forEach((item) => {
          item.setAttribute('tabindex', '-1');
        });
      },
      initAria() {
        this.dropdownWm.setAttribute('id', this.listId);
        this.triggerWm.setAttribute('aria-haspopup', 'list');
        this.triggerWm.setAttribute('aria-controls', this.listId);
        this.menuItems = this.dropdownWm.querySelectorAll("[tabindex='-1']");
        this.menuItemsArray = Array.prototype.slice.call(this.menuItems);

        if (!this.splitButton) { // 自定义
          this.triggerWm.setAttribute('role', 'button');
          this.triggerWm.setAttribute('tabindex', '0');
          this.triggerWm.setAttribute('class', (this.triggerWm.getAttribute('class') || '') + ' w-dropdown-selfdefine'); // 控制
        }
      },
      initEvent() {
        let { trigger, show, hide, handleClick, splitButton, handleTriggerKeyDown, handleItemKeyDown } = this;
        this.triggerWm = splitButton
          ? this.$refs.trigger.$el
          : this.$slots.default[0].elm;

        let dropdownWm = this.dropdownWm = this.$slots.dropdown[0].elm;

        this.triggerWm.addEventListener('keydown', handleTriggerKeyDown); // triggerWm keydown
        dropdownWm.addEventListener('keydown', handleItemKeyDown, true); // item keydown
        // 控制自定义元素的样式
        if (!splitButton) {
          this.triggerWm.addEventListener('focus', () => {
            this.focusing = true;
          });
          this.triggerWm.addEventListener('blur', () => {
            this.focusing = false;
          });
          this.triggerWm.addEventListener('click', () => {
            this.focusing = false;
          });
        }
        if (trigger === 'hover') {
          this.triggerWm.addEventListener('mouseenter', show);
          this.triggerWm.addEventListener('mouseleave', hide);
          dropdownWm.addEventListener('mouseenter', show);
          dropdownWm.addEventListener('mouseleave', hide);
        } else if (trigger === 'click') {
          this.triggerWm.addEventListener('click', handleClick);
        }
      },
      handleMenuItemClick(command, instance) {
        if (this.hideOnClick) {
          this.visible = false;
        }
        this.$emit('command', command, instance);
      },
      focus() {
        this.triggerWm.focus && this.triggerWm.focus();
      }
    },

    render(h) {
      let { hide, splitButton, type, dropdownSize } = this;

      const handleMainButtonClick = (event) => {
        this.$emit('click', event);
        hide();
      };

      let triggerWm = !splitButton
        ? this.$slots.default
        : (<w-button-group>
          <w-button type={type} size={dropdownSize} nativeOn-click={handleMainButtonClick}>
            {this.$slots.default}
          </w-button>
          <w-button ref="trigger" type={type} size={dropdownSize} class="w-dropdown__caret-button">
            <i class="w-dropdown__icon w-icon-arrow-down"></i>
          </w-button>
        </w-button-group>);

      return (
        <div class="w-dropdown" v-clickoutside={hide}>
          {triggerWm}
          {this.$slots.dropdown}
        </div>
      );
    }
  };
</script>
