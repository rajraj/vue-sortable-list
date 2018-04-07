<script>
import { Sortable } from '@shopify/draggable';
import { move } from '../utils/sortArray'

export default {
  props: {
    value: {
      required: true
    },
    itemClass: {
      default: 'todo-item'
    },
    handleClass: {
      default: '.todo-handle'
    }
  },
  provide() {
    return {
      itemClass: this.itemClass,
      handleClass: this.handleClass
    }
  },
  render() {
    return this.$scopedSlots.default({
      items: this.value
    });
  },
  mounted() {
    new Sortable(this.$el, {
      draggable: `.${this.itemClass}`,
      handle: `.${this.handleClass}`,
      mirror: {
        constrainDimensions: true
      }
    }).on('sortable:stop', ({ oldIndex, newIndex }) => {
      this.$emit('input', move(this.value, oldIndex, newIndex));
    })
  }
}
</script>

