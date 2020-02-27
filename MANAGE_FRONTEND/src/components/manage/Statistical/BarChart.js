import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import styled from 'styled-components';
import { useMemo } from 'react';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const BarChartWrapper = styled.div`
  height: 400px;
`;

const BarChart = ({ originalData, type }) => {
  const Data = useMemo(() => {
    if (type === '15day') {
      const new_data = originalData
        .map(data => ({
          ...data,
          name: `${new Date(data.name).getMonth() + 1}월${new Date(
            data.name,
          ).getDate()}일`,
        }))
        .reverse();
      return new_data;
    } else if (type === '1month') {
      const new_data = originalData
        .map(data => ({
          ...data,
          name: `${new Date(data.name).getFullYear()}년 ${new Date(
            data.name,
          ).getMonth() + 1}월`,
        }))
        .reverse();
      return new_data;
    } else {
      return originalData;
    }
  }, [originalData, type]);

  return (
    <BarChartWrapper>
      <ResponsiveBar
        data={Data}
        keys={['qr', 'click']}
        indexBy="name"
        margin={{ top: 50, right: 30, bottom: 60, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '카운팅',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: -50,
            itemsSpacing: 2,
            itemWidth: 60,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </BarChartWrapper>
  );
};

export default BarChart;
