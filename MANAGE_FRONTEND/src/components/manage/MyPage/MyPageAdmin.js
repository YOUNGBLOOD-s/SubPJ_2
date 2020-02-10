import React, { useState } from 'react';
import MaterialTable from 'material-table';

const MyPageAdmin = ({ userInfo, setUserInfo }) => {
  const { data } = userInfo;
  console.log(data.toJS());
  const [state, setState] = useState({
    columns: [
      { title: '아이디', field: 'username' },
      { title: '등급', field: 'grade', type: 'numeric' },
      { title: '회사명', field: 'company' },
    ],
    data: data.toJS(),
  });

  return (
    <MaterialTable
      title="회원 목록"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
};

export default MyPageAdmin;
