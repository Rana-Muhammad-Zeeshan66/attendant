import styled from 'styled-components';

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 2em;

  .search-field {
    width: 250px;
  }

  .select-input {
    width: 150px;
    padding: 0 1em 0 1em;
  }
`;

export default FiltersContainer;
