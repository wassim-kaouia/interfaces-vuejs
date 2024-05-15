<template>
  <div class="container topping">
    <div class="row">
      <div class="col-md-4">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text" id="btnGroupAddon2">№ Dossier</div>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </div>
      </div>

      <div class="col-md-4">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text" id="btnGroupAddon2">№ Dossier</div>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </div>
      </div>

      <div class="col-md-4">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text" id="btnGroupAddon2">№ Exploitant</div>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </div>
      </div>
    </div>
    <!-- second row  -->

    <div class="row mt-4">
      <div class="col-md-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Statut Dossier</label>
          </div>
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div class="col-md-6">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text" id="btnGroupAddon2">№ Exploitant</div>
          </div>
          <datepicker
            style="
              height: 38px;
              border: 1px solid #dee2e6;
              border-top-right-radius: 0.375rem;
              border-bottom-right-radius: 0.375rem;
            "
            v-model="selected"
            :locale="locale"
            :upperLimit="to"
            :lowerLimit="from"
            :clearable="true"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4 tableFixHead">
    <table class="">
      <thead>
        <tr>
          <th>Select</th>
          <th>№ Dossier</th>
          <th>№ Aide</th>
          <th>Libellé Aide</th>
          <th>Type Mouv</th>
          <th>Date M.à.J</th>
          <th>Montant</th>
          <th>Statut</th>
          <th>Date de paiement</th>
          <th>Detail</th>
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
          <td>{{ user.num_dossier }}</td>
          <td>{{ user.num_aide }}</td>
          <td>{{ user.lib_aide }}</td>
          <td>{{ user.type_mouv }}</td>
          <td>{{ user.date_maj }}</td>
          <td>{{ user.montant }}</td>
          <td>{{ user.statut }}</td>
          <td>{{ user.date_paiement }}</td>
          <td>{{ user.detail }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <button class="btn btn-primary mx-2" @click="selectAll">Select All</button>
        <button class="btn btn-secondary mx-2" @click="deselectAll">Deselect All</button>
        <button class="btn btn-danger mx-2" @click="deleteSelected">Delete Selected</button>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker/src/datepicker/Datepicker.vue'

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      selected: new Date(),
      users: [
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Payé',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1306,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'P',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'P',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1526,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Payé',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        },
        {
          num_dossier: 1546,
          num_aide: '124',
          lib_aide: 'niohahaha',
          type_mouv: 'S',
          date_maj: '20/12/2024',
          montant: '123,9',
          statut: 'Repris',
          date_paiement: '12/12/2024',
          detail: 'Voir'
        }
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

<style scoped>
.tableFixHead {
  overflow: auto;
  height: 400px;
}
.tableFixHead thead th {
  position: sticky;
  top: 0;
  z-index: 1;
}

/* Just common table stuff. Really. */
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  padding: 8px 16px;
}
th {
  background: #eee;
}

.topping {
  margin-top: 100px;
  position: relative;
}
</style>