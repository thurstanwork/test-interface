import React from 'react';
import { storiesOf } from '@storybook/react';
import profilePic from '../Card/conor.png';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Section, Navbar } from './Navbar.component.tsx';
import { Button } from '../Button/Button.component.tsx';

let filler = '';
const possibleFillers = 'qwertyuiopasdfghjklzxcvbnm';
for (let i = 0; i < 5000; i += 1) {
  filler += possibleFillers.charAt(
    Math.floor(Math.random() * possibleFillers.length),
  );

  if (Math.random() < 0.2) {
    filler += ' ';
    filler += possibleFillers
      .charAt(Math.floor(Math.random() * possibleFillers.length))
      .toUpperCase();
  }
}

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .add('topbar', () => {
    const isDark = boolean('Dark Theme', false);
    const isActive = boolean('Drop down', false);

    const classes = ['navbar'];
    if (isDark) classes.push('is-dark');
    if (isActive) classes.push('is-active');

    return (
      <div>
        <nav className={classes.join(' ')}>
          <div className="hamburger"></div>
          <a className="title">Aurecon</a>
          <div className="links">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <div className="right">
            <i className="fas fa-search"></i>
            <i className="far fa-bell"></i>
            <i className="fas fa-th"></i>
            <img src={profilePic} className="profile" alt="Profile Pic" />
          </div>
        </nav>
        <section>
          <header className="pageTitle">Title</header>
          <div className="container">{filler}</div>
        </section>
        <section>
          <header className="pageTitle">Some Breadcrumbs</header>
          <div className="breadcrumbs">
            <div>Breadcrumb 1</div>
            <div>Breadcrumb 2</div>
            <div>Breadcrumb 3</div>
          </div>
          <div className="container">{filler}</div>
        </section>
        <section>
          <header className="pageTitle">Some Second Title</header>
          <nav className="tabs">
            <div className="tab">Tab name 1</div>
            <div className="tab is-active">Tab name 2</div>
            <div className="tab">Tab name 3</div>
            <div className="tab">Tab name 4</div>
            <div className="tab">Tab name 5</div>
          </nav>
          <div className="container">{filler}</div>
        </section>
        <section>
          <nav className="tabs">
            <div className="tab">Tab name 1</div>
            <div className="tab is-active">Tab name 2</div>
            <div className="tab">Tab name 3</div>
            <div className="tab">Tab name 4</div>
            <div className="tab">Tab name 5</div>
          </nav>
          <div className="container">{filler}</div>
        </section>
      </div>
    );
  })
  .add('react', () => {
    const isDark = boolean('Is Dark', true);

    return (
      <div>
        <Navbar title="Aurecon" isDark={isDark} profilePic={profilePic}>
          <a href="#">Digital Review Room</a>
          <a href="#">Treehouse</a>
          <a href="#">Plant Quality Control</a>
        </Navbar>
        <Section title="Some Test Page Title">
          <div className="container">{filler}</div>
        </Section>
        <Section
          title="Breadcrumbs"
          breadcrumbs={['Bread 1', 'Bread 2', 'Bread 3', 'Bread 4', 'Bread 5']}
        >
          <div className="container">{filler}</div>
        </Section>
        <Section
          title="Example Tabs Section"
          tabs={[
            { key: '1', title: 'Tab 1', content: 'Content of Tab 1' },
            {
              key: '2',
              title: 'Tab 2',
              content: <Button>Button in Tab 2</Button>,
            },
            {
              key: '3',
              title: 'Tab 3',
              content: <div className="container">{filler}</div>,
            },
          ]}
        />
      </div>
    );
  });
