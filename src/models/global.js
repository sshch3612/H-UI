import { queryNotices } from '../services/api';

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
  },

  effects: {}
};
