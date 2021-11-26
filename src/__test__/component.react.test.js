import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Navbar } from 'react-bootstrap';
import store from '../redux/configureStore';
import Home from '../components/home/Home';
import Search from '../components/home/Search';
import Banner from '../components/Banner';
import Collection from '../components/Collection';
import Photo from '../components/target_collection/media/Photo';

describe('Components snapshot testing', () => {
  test('Home page testing', () => {
    const homePage = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    ).toJSON;
    expect(homePage).toMatchSnapshot();
  });
  test('Search testing', () => {
    const search = renderer.create(
      <Provider store={store}>
        <Search />
      </Provider>,
    ).toJSON;
    expect(search).toMatchSnapshot();
  });
  test('Banner testing', () => {
    const banner = renderer.create(
      <Provider store={store}>
        <Banner />
      </Provider>,
    ).toJSON;
    expect(banner).toMatchSnapshot();
  });
  test('Collection testing', () => {
    const test = { id: 122, title: 'testing title', photos_count: '1239' };

    const collection = renderer.create(
      <Provider store={store}>
        <Collection collectionInfo={test} />
      </Provider>,
    ).toJSON;
    expect(collection).toMatchSnapshot();
  });
  test('Photo testing', () => {
    const testPhoto = {
      id: 'test',
      photographer: 'testPhotographer',
      src: { portrait: 'test source', medium: 'test source' },
      height: '200',
    };
    const photo = renderer.create(
      <Provider store={store}>
        <Photo photo={testPhoto} />
      </Provider>,
    ).toJSON;
    expect(photo).toMatchSnapshot();
  });
  test('Navbar testing', () => {
    const navbar = renderer.create(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    ).toJSON;
    expect(navbar).toMatchSnapshot();
  });
});
