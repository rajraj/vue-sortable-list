<script>
export default {
  inject: ['handleClass'],
  render() {
    return this.$slots.default[0]
  },
  mounted() {
    this.$el.classList.add(this.handleClass)
  }
}
</script>

