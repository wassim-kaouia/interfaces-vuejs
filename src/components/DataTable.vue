<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Select</th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          @click="toggleSelect(user)"
          :class="{ 'table-active': selectedUsers.includes(user) }"
        >
          <td>
            <input type="checkbox" :checked="selectedUsers.includes(user)" @click.stop />
          </td>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button class="btn btn-primary" @click="selectAll">Select All</button>
      <button class="btn btn-secondary" @click="deselectAll">Deselect All</button>
      <button class="btn btn-danger" @click="deleteSelected">Delete Selected</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
        { id: 3, name: 'Alice Smith', email: 'alice@example.com' },
        { id: 4, name: 'Bob Smith', email: 'bob@example.com' }
      ],
      selectedUsers: []
    }
  },
  methods: {
    toggleSelect(user) {
      const index = this.selectedUsers.indexOf(user)
      if (index === -1) {
        this.selectedUsers.push(user)
      } else {
        this.selectedUsers.splice(index, 1)
      }
    },
    selectAll() {
      this.selectedUsers = [...this.users]
    },
    deselectAll() {
      this.selectedUsers = []
    },
    deleteSelected() {
      this.users = this.users.filter((user) => !this.selectedUsers.includes(user))
      this.selectedUsers = []
    }
  }
}
</script>