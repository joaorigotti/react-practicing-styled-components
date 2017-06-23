import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  &::after {
    content: '';
    width: 30.3030%;
  }
`;

const ListItem = styled.li`
  display: flex;
  width: 30.3030%;
  margin: 2.8em 0;
`;

export { List, ListItem }