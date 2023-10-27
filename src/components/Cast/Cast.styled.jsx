import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const CastItem = styled.li`
  width: calc((100% - 90px) / 5);
  border: 1px solid #800;
  display: flex;
  padding-bottom: 5px;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-align: center;
`;