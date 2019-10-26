import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme'; // Для мелкорендорного DOM

test('рендеринг', () => {
  // const wrapper = shallow(<PikAmountControl name="amount" />);
  expect(2 + 2).toEqual(4);
});

// describe('App', () => {
//   // let component ,node;
//   // beforeEach(() => component = shallow(<App/>));
//   // beforeEach(() => node = component.find('h2'));
//   //
//   // it('has an h2 tag', () => {
//   //     expect(node.length).toEqual(1);
//   // });
//   //
//   // it('has a title class', () => {
//   //     expect(node.hasClass('title')).toBeTruthy();
//   // })

//   it('yes', () => {
//     console.info('eee');
//   });
// });
