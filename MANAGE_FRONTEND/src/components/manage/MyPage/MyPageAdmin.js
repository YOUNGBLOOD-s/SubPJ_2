import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import LoadingBackdrop from '../../common/LoadingBackdrop';
import { List } from 'immutable';
import styled from 'styled-components';

const MyPageAdminWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
`;

const MyPageAdmin = () => {
  const token = sessionStorage.getItem('access_token');
  const [userInfo, setUserInfo] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    axios
      .post(
        'https://i02c110.p.ssafy.io:8887/api/auth/infomem',
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
          { title: '아이디', field: 'username', editable: 'onAdd' },
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
    <MyPageAdminWrapper>
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
                  axios
                    .post(
                      'https://i02c110.p.ssafy.io:8887/api/auth/register',
                      newData,
                    )
                    .then(res => {
                      console.log(res);
                      setState(prevState => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                      });
                    })
                    .catch(err => console.log(err));
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
                        'https://i02c110.p.ssafy.io:8887/api/auth/updatemem',
                        newData,
                        {
                          headers: {
                            Authorization: token,
                          },
                        },
                      )
                      .then(res => {
                        console.log(res);
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
                  const idx = oldData.idx;
                  axios
                    .delete(
                      'https://i02c110.p.ssafy.io:8887/api/auth/deleteadmin/' +
                        idx,
                      {
                        headers: {
                          Authorization: token,
                        },
                      },
                    )
                    .then(res => {
                      console.log(res);
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
    </MyPageAdminWrapper>
  );
};

export default MyPageAdmin;
