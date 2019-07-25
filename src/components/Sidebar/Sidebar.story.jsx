import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { withKnobs } from '@storybook/addon-knobs';
import {
  Sidebar as SidebarContent,
  SidebarHeader,
  SidebarButton,
} from './index';
import Sidebar from 'react-sidebar';

const store = new Store({
  sidebarOpen: true,
});

// This is something like you want to structure your sidebars
const sidebarTree = [
  { label: 'Hello' },
  {
    label: 'Daniel',
    isOpen: true,
    isActive: true,
    children: [
      { label: `I've` },
      { label: `Been` },
      { label: `Expecting` },
      { label: `You`, isActive: true },
    ],
  },
];

storiesOf('Sidebar', module)
  .addDecorator(withKnobs)
  .add('with light', () => (
    <div>
      <div className="sidebar">
        <div className="sidebar__header">
          <figure className="image is-48x48">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder"
            />
          </figure>

          <div className="media-content">
            <p className="title is-6 overflow-elipsis">John Smith</p>
          </div>
        </div>

        <button type="button" className="sidebar__button">
          <a href>Hello</a>
          <i className="fas fa-chevron-down" />
        </button>
        <button type="button" className="sidebar__button is-active is-open">
          <a href>Daniel</a>
          <i className="fas fa-chevron-down" />
        </button>
        <button type="button" className="sidebar__button is-secondary">
          <a href>Ive</a>
        </button>
        <button type="button" className="sidebar__button is-secondary">
          <a href>been</a>
        </button>
        <button type="button" className="sidebar__button is-secondary">
          <a href>expecting</a>
        </button>
        <button
          type="button"
          className="sidebar__button is-secondary is-active"
        >
          <a href>you</a>
        </button>

        <div className="sidebar__footer">
          <div className="sidebar__button_collapse">
            <i className="fas fa-chevron-left" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('closed', () => (
    <div>
      <div className="sidebar is-dark is-closed">
        <div className="sidebar__header">
          <figure className="image is-48x48">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder"
            />
          </figure>

          <div className="media-content">
            <p className="title is-6 overflow-elipsis">John Smith</p>
          </div>
        </div>

        <button type="button" className="sidebar__button">
          <a href>hello</a>
          <i className="fas fa-chevron-down" />
        </button>
        <button type="button" className="sidebar__button">
          <a href>Daniel</a>
          <i className="fas fa-chevron-down" />
        </button>
        <button type="button" className="sidebar__button">
          <a href>Daniel</a>
          <i className="fas fa-chevron-down" />
        </button>

        <div className="sidebar__footer">
          <div className="sidebar__button_collapse">
            <i className="fas fa-chevron-left" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('with dark', () => (
    <div>
      <div className="sidebar is-dark">
        <div className="sidebar__header is-dark">
          <figure className="image is-48x48">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder"
            />
          </figure>

          <div className="media-content">
            <p className="title is-6 overflow-elipsis">John Smith</p>
          </div>
        </div>

        <button type="button" className="sidebar__button is-dark">
          <a href>Hello</a>
          <i className="fas fa-chevron-down" />
        </button>
        <button
          type="button"
          className="sidebar__button is-active is-open is-dark"
        >
          <a href>Daniel</a>
          <i className="fas fa-chevron-down" />
        </button>
        <button type="button" className="sidebar__button is-secondary is-dark">
          <a href>Ive</a>
        </button>
        <button type="button" className="sidebar__button is-secondary is-dark">
          <a href>been</a>
        </button>
        <button type="button" className="sidebar__button is-secondary is-dark">
          <a href>expecting</a>
        </button>
        <button
          type="button"
          className="sidebar__button is-secondary is-active is-dark"
        >
          <a href>you</a>
        </button>

        <div className="sidebar__footer">
          <div className="sidebar__button_collapse">
            <i className="fas fa-chevron-left" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('with react', () => (
    <State store={store}>
      {state => (
        <Sidebar
          sidebar={
            <SidebarContent
              header={<SidebarHeader title="Will Cox" subtitle="Head Honcho" />}
            >
              <SidebarButton label="Hello" />
              <SidebarButton label="Daniel," isActive={true} isOpen={true}>
                <SidebarButton
                  label="Ive"
                  isSecondary={true}
                  isActive={false}
                />
                <SidebarButton
                  label="Been"
                  isSecondary={true}
                  isActive={false}
                />
                <SidebarButton
                  label="Expecting"
                  isSecondary={true}
                  isActive={false}
                />
                <SidebarButton label="You" isSecondary={true} isActive={true} />
              </SidebarButton>
            </SidebarContent>
          }
          open={state.sidebarOpen}
          sidebarClassName="sidebar"
          onSetOpen={open => store.set({ sidebarOpen: open })}
          styles={{ sidebar: { background: 'white', zIndex: '2' } }}
        >
          {/* Amazing website content lives here */}
        </Sidebar>
      )}
    </State>
  ));
