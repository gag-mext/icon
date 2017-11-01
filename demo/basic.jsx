
import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src';
import Grid from '@gag/grid';
const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'koubei-o', 'koubei', 'loading',
];
/* eslint global-require: 0 */

const Demo = () => {
  const data = icons.map(item => ({
    icon: (<Icon type={item} />),
    text: item,
  })).concat([{
    icon: (<Icon type={require('./reload.svg')} />),
    text: '自定义图标',
  }]);
  return (
    <Grid data={data} columnNum={3} hasLine={false} />
  );
};

ReactDOM.render(<Demo />, document.getElementById('sk-root'));
````
