<script>
export default {
  inject: ['itemClass'],
  render() {
    return this.$slots.default[0]
  },
  mounted() {
    this.$el.classList.add(this.itemClass)
  }
}
</script>

