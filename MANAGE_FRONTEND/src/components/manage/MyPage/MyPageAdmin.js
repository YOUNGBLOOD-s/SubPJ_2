import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import LoadingBackdrop from '../../common/LoadingBackdrop';
import { List } from 'immutable';

const MyPageAdmin = () => {
  const token = sessionStorage.getItem('access_token');
  const [userInfo, setUserInfo] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    axios
      .post(
        'http://i02c110.p.ssafy.io:8887/api/auth/infomem',
        { password: 'admin' },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(res => {
        setUserInfo({ data: List(res.data.memlist) });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (userInfo && userInfo.data) {
      setState({
        columns: [
          { title: '아이디', field: 'username', editable: 'never' },
          { title: '등급', field: 'grade', type: 'numeric' },
          { title: '비밀번호', field: 'password' },
          { title: '회사명', field: 'company' },
        ],
        data: userInfo.data.toJS(),
      });

      setState(prevState => {
        const data = [...prevState.data];
        data.map((item, index) => {
          data[index].password = '';
        });
        return { ...prevState, data };
      });
    }
  }, [userInfo]);

  return (
    <div>
      {userInfo && state ? (
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
                    if (newData.username === 'admin') newData.grade = 1;
                    axios
                      .put(
                        'http://i02c110.p.ssafy.io:8887/api/auth/updatemem',
                        newData,
                        {
                          headers: {
                            Authorization: token,
                          },
                        },
                      )
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
                    .delete(
                      'http://i02c110.p.ssafy.io:8887/api/auth/deleteadmin/' +
                        idx,
                      {
                        headers: {
                          Authorization: token,
                        },
                      },
                    )
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
      ) : (
        <LoadingBackdrop loading={!!userInfo} />
      )}
    </div>
  );
};

export default MyPageAdmin;
