<template>
  <div id="app">
    <div class="bg-white shadow-sm rounded max-w-md mx-auto py-8 px-4">
      <h1 class="font-hairline px-4 mb-4 text-indigo-light">To-do List</h1>
      <sortable-list v-model="todos" item-class="hello-item" handle-class="hello-handle">
        <div slot-scope="{ items }">
          <sortable-item v-for="item in items" :key="item.id" >
            <div class="bg-white px-4">
              <div class="flex items-center border-b border-grey-lighter">
                <div class="flex-grow flex items-center py-4">
                  <input type="checkbox" class="mr-3">
                  {{ item.description }}
                </div>
                <sortable-handle>
                  <svg class="ml-2 h-4 w-4 cursor-move text-grey hover:text-grey-darkest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"/></svg>
                </sortable-handle>
              </div>
            </div>
          </sortable-item>
        </div>
      </sortable-list>
    </div>
  </div>
</template>

<script>
import SortableList from './components/SortableList.vue'
import SortableItem from './components/SortableItem.vue'
import SortableHandle from './components/SortableHandle.vue'

export default {
  name: 'app',
  components: {
    SortableList,
    SortableItem,
    SortableHandle
  },
  data() {
    return {
      todos: [
        { id: 1, description: "Pick up dry cleaning", complete: false },
        { id: 2, description: "Order pizza", complete: false },
        { id: 3, description: "Learn VueJS", complete: false },
        { id: 4, description: "Some other task", complete: false },
        { id: 5, description: "Watch Blockchain lectures", complete: false }
      ]
    }
  }
}
</script>

<style>
  .draggable-source--is-dragging {
    background-color: #f1f5f8;
  }
  .draggable-source--is-dragging > div {
    opacity: 0;
  }
</style>
