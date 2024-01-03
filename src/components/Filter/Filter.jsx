import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from '../../redux/filterSlice';

const Filter = () => {
  const getFilter = state => state.filter.filter;
  const value = useSelector(getFilter) || '';
  const dispatch = useDispatch();
  const onChange = e => {
    const { value } = e.currentTarget;
    dispatch(onChangeFilter(value));
  };
  return (
    <label
      style={{
        fontSize: 23,
        fontStyle: 'italic',
      }}
    >
      Find contacts by name
      <input
        style={{
          fontSize: 25,
        }}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
