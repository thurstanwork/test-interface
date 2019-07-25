import * as React from 'react';
import { Router, Route, Link } from 'react-router-dom';

export interface INavbarProps {
  title?: string;
  titleHref?: string;

  isDark?: boolean;

  accountActions?: JSX.Element;
  profilePic?: string;

  sidebarCallback?: () => void;
}

export const Navbar: React.FC<INavbarProps> = ({
  sidebarCallback = () => {},
  title = '',
  titleHref = '/',
  ...props
}) => {
  const classes = ['navbar'];
  if (props.isDark) classes.push('is-dark');

  return (
    <nav className={classes.join(' ')}>
      <div onClick={sidebarCallback} className="hamburger"></div>

      
      <div className="links">{props.children}</div>
      <div className="right">
        {props.accountActions}
        {props.profilePic && (
          <img src={props.profilePic} className="profile" alt="Profile Pic" />
        )}
      </div>
    </nav>
  );
};

export interface ISectionDefaultProps {
  title?: string;
}

export interface ISectionBreadcrumbsProps extends ISectionDefaultProps {
  breadcrumbs: string[];
}

export interface ITab {
  key: string;
  title: string;
  content: JSX.Element | JSX.Element[] | string;
}

export interface ISectionTabsProps extends ISectionDefaultProps {
  tabs: ITab[];
}

export type SectionProps = ISectionBreadcrumbsProps | ISectionTabsProps;

function isBreadcrumbs(props: SectionProps): props is ISectionBreadcrumbsProps {
  return (props as ISectionBreadcrumbsProps).breadcrumbs !== undefined;
}

function isTabs(props: SectionProps): props is ISectionTabsProps {
  return (props as ISectionTabsProps).tabs !== undefined;
}

export const Section: React.FC<SectionProps> = props => {
  const [activeTab, setActiveTab] = React.useState<string>();
  let extraBar = undefined as JSX.Element | undefined;
  let tabContent = undefined as ITab['content'] | undefined;

  if (isBreadcrumbs(props)) {
    extraBar = (
      <div className="breadcrumbs">
        {props.breadcrumbs.map((x, i) => (
          <div key={i.toString()}>{x}</div>
        ))}
      </div>
    );
  }

  if (isTabs(props)) {
    extraBar = (
      <div className="tabs">
        {props.tabs.map(x => {
          const handleClick = () => setActiveTab(x.key);

          const tabClasses = ['tab'];
          if (activeTab === x.key) tabClasses.push('is-active');

          return (
            <div
              onClick={handleClick}
              className={tabClasses.join(' ')}
              key={x.key}
            >
              {x.title}
            </div>
          );
        })}
      </div>
    );
    if (activeTab) {
      const c = props.tabs.find(x => x.key === activeTab);
      if (c) {
        tabContent = c.content;
      }
    }
  }

  React.useEffect(() => {
    if (isTabs(props)) {
      if (activeTab === undefined && props.tabs.length >= 1) {
        setActiveTab(props.tabs[0].key.toString());
      }
    }
  }, [activeTab, props]);

  return (
    <section>
      {props.title && <header className="pageTitle">{props.title}</header>}
      {extraBar}
      {tabContent}
      {props.children}
    </section>
  );
};
