<template>
  <div id="app">
    <div class="header">
      <div>
        <b-field label="Selecciona un equipo, escribe su nombre">
          <b-autocomplete
            rounded
            v-model="teamName"
            field="team_name"
            :data="filteredDataArray"
            placeholder="e.g. Toluca"
            icon="magnify"
            clearable
            @select="onSelected">
            <template #empty>No results found</template>
          </b-autocomplete>
        </b-field>
      </div>
    </div>
    <TeamProfile
      use-local-loading
      :season-id="seasonId"
      :team-id="selectedTeamId"
      @season-changed="onSeasonChanged"
    />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      seasonId: 1325,
      teams: [],
      selectedTeamId: 1,
      teamName: '',
    }
  },
  async created() {
    const { data: { teams }} = await axios.get(
      `https://d2oco6mqmc.execute-api.us-west-2.amazonaws.com/prod/teamsBySeason/${this.seasonId}`
    );
    this.teams = teams;
  },
  computed: {
    filteredDataArray() {
      return this.teams.filter((option) => {
        return option
          .team_name
          .toString()
          .toLowerCase()
          .indexOf(this.teamName.toLowerCase()) >= 0
      })
    }
  },
  methods: {
    onSeasonChanged(value) {
      console.log('onSeasonChanged: ', value);
    },
    onSelected(option) {
      if (option) {
        this.selectedTeamId = option.team_id;
      }
    }
  },
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 200px;
  margin: 16px;
  background-color: blueviolet;
  border-radius: 10px;
}

.header .label {
  color: white;
}
</style>
