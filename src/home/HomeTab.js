import React from 'react';
import ChartExample from './ChartExample';

const style = {
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 0,
  flexGrow: 1,
  height: '100%',
  minHeight: '100%'
};

function HomeTab(props) {
  const [currentRow, setCurrentRow] = React.useState({});
  return (
    <div style={style}>
      <ChartExample />
    </div>
  );
}

export default HomeTab;
