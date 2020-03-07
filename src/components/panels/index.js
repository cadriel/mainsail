import Vue from 'vue'

import StatusPanel from './StatusPanel.vue'
import ToolsPanel from './ToolsPanel.vue'
import TempchartPanel from './TempchartPanel.vue'

Vue.component('status-panel', StatusPanel);
Vue.component('tools-panel', ToolsPanel);
Vue.component('tempchart-panel', TempchartPanel);

export default {
    StatusPanel,
}