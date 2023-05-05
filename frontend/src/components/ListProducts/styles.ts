import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #282c34;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 800px;
  margin-top: 20px;
`;

export const TableHead = styled.thead`
  background-color: #282c34;
  color: #fff;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
  color: #282c34;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
`;

export const TableData = styled.td`
  padding: 8px;
  text-align: left;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const ButtonEdit = styled.button`
  background-color: #4caf50;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    background-color: #43a047;
  }
`;

export const ButtonDelete = styled.button`
  background-color: #f44336;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;

export const ButtonDetail = styled.button`
  background-color: #2196f3;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    background-color: #0b7dda;
  }
`;

export const ButtonAdd = styled.button`
  background-color: #4caf50;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
`;
