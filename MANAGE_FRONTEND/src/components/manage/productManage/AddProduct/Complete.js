import React, { useState } from 'react';
import component from '../../../../lib/material/component';
import { useDispatch, useSelector } from 'react-redux';
import { prevStep, nextStep } from '../../../../modules/stepper';
import axios from 'axios';

const Complete = ({ classes, step, steps }) => {
  const [loading, setLoading] = useState({
    routeState: {
      loading: false,
      complete: false,
    },
    imageState: {
      loading: false,
      complete: false,
    },
  });

  const dispatch = useDispatch();
  const { routes, images } = useSelector(({ product }) => ({
    routes: product.routes,
    images: product.images,
  }));

  const token = sessionStorage.getItem('access_token');
  const handleBack = () => {
    dispatch(prevStep());
  };

  // 이미지들 저장
  const imagesAdding = () => {
    // 이미지들 로딩 시작
    // TODO: 배열로 받는걸로 변경하도록 백이랑 얘기하기
    setLoading({
      ...loading,
      imageState: {
        ...loading.routeState,
        loading: true,
      },
    });
    axios
      .post('/api/man/image/add', routes, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        setLoading({
          ...loading,
          imageState: {
            complete: true,
            loading: false,
          },
        });
      })
      .catch(err => {
        console.log(err);
        setLoading({
          ...loading,
          imageState: {
            complete: false,
            loading: false,
          },
        });
      });
  };

  // 경로들 저장
  const contentsAdding = () => {
    // 로딩 시작
    setLoading({
      ...loading,
      routeState: {
        ...loading.routeState,
        loading: true,
      },
    });

    axios
      .post('/api/man/contents/add', routes, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        setLoading({
          ...loading,
          routeState: {
            complete: true,
            loading: false,
          },
        });
      })
      .catch(err => {
        console.log(err);
        setLoading({
          ...loading,
          routeState: {
            complete: false,
            loading: false,
          },
        });
      });
  };

  const handleNextAndComplete = () => {
    contentsAdding();
    imagesAdding();
    // 정상적으로 완료되었다면
    if (loading.imageState.complete && loading.routeState.complete) {
      dispatch(nextStep());
    } else {
      // 오류 문구 띄우기
    }
  };

  console.log(routes, images);
  return (
    <div>
      <h4>등록될 상품을 마지막으로 확인하고 마무리하세요</h4>
      <h5>로딩 상태 및 현재 상태들 확인..</h5>
      <div>
        <component.Button
          disabled={step === 0}
          onClick={handleBack}
          className={classes.button}
        >
          이전단계로
        </component.Button>
        <component.Button
          variant="contained"
          color="primary"
          onClick={handleNextAndComplete}
          className={classes.button}
        >
          {step === steps.length - 1 ? '완료' : '다음'}
        </component.Button>
      </div>
    </div>
  );
};

export default Complete;
