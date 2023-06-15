export const jobsInitialState = {
  list: [],
  filteredList: [],
  filters: [],
};

export const jobsReducer = (state, action) => {
  if (action.type === "LOAD_DATA") {
    return {
      ...state,
      list: [...action.payload],
      filteredList: [...action.payload],
    };
  }

  if (action.type === "ADD_TO_FILTER") {
    if (!state.filters.includes(action.payload)) {
      const filters = [...state.filters, action.payload];
      const filteredList = state.filteredList.filter((item) => {
        const allFilterableValues = [
          item.role,
          item.level,
          ...item.languages,
          ...item.tools,
        ];

        console.log(filters, allFilterableValues);

        // if filters exist in an item return that item
        return filters.every((ai) => allFilterableValues.includes(ai));
      });
      return {
        ...state,
        filteredList,
        filters,
      };
    }
  }

  if (action.type === "REMOVE_FROM_FILTER") {
    const filters = state.filters.filter((x) => x !== action.payload);

    if (filters.length > 0) {
      const filteredList = state.list.filter((item) => {
        const allFilterableValues = [
          item.role,
          item.level,
          ...item.languages,
          ...item.tools,
        ];

        // if filters exist in an item return that item
        return filters.every((ai) => allFilterableValues.includes(ai));
      });

      return {
        ...state,
        filteredList,
        filters,
      };
    } else {
      return {
        ...state,
        filteredList: [...state.list],
        filters: [],
      };
    }
  }

  if (action.type === "CLEAR_ALL_FILTER") {
    return {
      ...state,
      filteredList: [...state.list],
      filters: [],
    };
  }

  return state;
};
