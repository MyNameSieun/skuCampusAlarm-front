import styled from 'styled-components';

const ClassTimes_3 = () => {
  return (
    <ClassTimesLayout>
      <Table>
        <thead>
          <tr>
            <Th>교시</Th>
            <Th>시간</Th>
          </tr>
        </thead>
        <tbody>
          <Tr>
            <Td>1교시</Td>
            <Td>09:00-09:50</Td>
          </Tr>
          <Tr>
            <Td>2교시</Td>
            <Td>09:55-10:45</Td>
          </Tr>
          <Tr>
            <Td>3교시</Td>
            <Td>10:50-11:40</Td>
          </Tr>
          <Tr>
            <Td>4교시</Td>
            <Td>11:55-12:45</Td>
          </Tr>
          <Tr>
            <Td>5교시</Td>
            <Td>12:50-13:40</Td>
          </Tr>
          <Tr>
            <Td>6교시</Td>
            <Td>13:45-14:35</Td>
          </Tr>
          <Tr>
            <Td>7교시</Td>
            <Td>14:40-15:30</Td>
          </Tr>
          <Tr>
            <Td>8교시</Td>
            <Td>15:35-16:25</Td>
          </Tr>
          <Tr>
            <Td>9교시</Td>
            <Td>16:30-17:20</Td>
          </Tr>
        </tbody>
      </Table>
    </ClassTimesLayout>
  );
};

export default ClassTimes_3;

const ClassTimesLayout = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
