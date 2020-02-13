import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

const MyPageAdmin = ({ userInfo, setUserInfo }) => {
  const token = sessionStorage.getItem('access_token');
  const { data } = userInfo;
  const [state, setState] = useState({
    columns: [
      { title: '아이디', field: 'username', editable: 'never' },
      { title: '등급', field: 'grade', type: 'numeric' },
      { title: '비밀번호', field: 'password' },
      { title: '회사명', field: 'company' },
    ],
    data: data.toJS(),
  });

  useEffect(() => {
    setState(prevState => {
      const data = [...prevState.data];
      data.map((item, index) => {
        data[index].password = '';
      });
      return { ...prevState, data };
    });
  }, []);

  return (
    <MaterialTable
      title="회원 목록"
      columns={state.columns}
      data={state.data}
      editable={{
        isDeletable: rowData => rowData.username !== 'admin',
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
                axios
                  .put('/api/auth/updatemem', newData, {
                    headers: {
                      Authorization: token,
                    },
                  })
                  .then(res => {
                    setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  })
                  .catch(err => console.log(err));
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              // setState(prevState => {
              //   const data = [...prevState.data];
              //   data.splice(data.indexOf(oldData), 1);
              //   return { ...prevState, data };
              // });
              const idx = oldData.idx;
              axios
                .delete('/api/auth/deleteadmin/' + idx, {
                  headers: {
                    Authorization: token,
                  },
                })
                .then(res => {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                })
                .catch(err => console.log(err));
            }, 600);
          }),
      }}
    />
  );
};

export default MyPageAdmin;
